# Multiple images in an open graph meta tag

## How we started.

A while ago I made this website: [gamesheadtohead.com](https://gamesheadtohead.com). It gives you 2 games and you get to pick your favorite between them. While building the features I ran into some pretty fun combinations, like [Lego Racers](https://www.igdb.com/games/lego-racers) vs [Oblivion](https://www.igdb.com/games/the-elder-scrolls-iv-oblivion). And I'd share these combos with my friends by taking a screen shot and posting it to discord.

<img src="src/assets/blog_assets/legoracers-vs-oblivion.jpg" alt="lego racers vs oblivion" width="400"/>

But I quickly realized that process is annoying and it'd be very cool if there was some way to make sharing battles a feature of the website.

## A share page using query params

Since I'd already designed the battle page, which grabs the images for 2 games based on their Ids, it was easy to make a "share battle" page which simply displays 2 games without all the battle features. I decided to use query params to determine which games would be shown.

<a href="https://gamesheadtohead.com/share?a=422&b=59">https://gamesheadtohead.com/share?a=422&b=59</a>

However, this didn't have quite the same effect as posting a screen shot online. In all the contexts I was sharing these images, the image is displayed immediately, and the viewer can see the game art for both games. I think this is important to the feeling of sharing these game comparisons. If you know a game, there are all sorts of emotions and history tied to that cover art. I wanted to evoke that when sharing the games. So a bland link really wasn't going to cut it as a sharing feature.

## Images from links

But I know from experience that often when posting a link online, that link will have some sort of image displayed below it. For example if you post

<a href="https://stackoverflow.com/questions/66439732/using-open-graph-meta-tags">https://stackoverflow.com/questions/66439732/using-open-graph-meta-tags</a>

into Discord what you'll see is:

<img src="src/assets/blog_assets/stack-overflow-opengraph.png" alt="Stack Overflow Open Graph" width="400"/>

This is what I wanted. Users should be able to just post a link to see images. No need to click or follow to see what games were compared. But what is this? Why is there an image when I post a link on Discord but not mine? How did it get there? Who made it?

## Open Graph Protocol has entered the chat.

According to its <a href="https://ogp.me/">official webpage</a>: "The Open Graph protocol enables any web page to become a rich object in a social graph."

This is the technology that allows links to "look good" on various sites and in different applications. But how does it work? The key is in the html file served from the link. It contains meta tags using special open graph properties that define what the link looks like.

```html
<html prefix="og: https://ogp.me/ns#">
  <head>
    <title>The Rock (1996)</title>
    <meta property="og:title" content="The Rock" />
    <meta property="og:type" content="video.movie" />
    <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
    <meta
      property="og:image"
      content="https://ia.media-imdb.com/images/rock.jpg"
    />
    ...
  </head>
  ...
</html>
```

And in that example above we can see the image property. Exactly what I need! But there's just one problem: I need to display 2 images not just 1. I did some googling and asked some friends about this. Unfortunately the open graph protocol does not support multiple images. So what do we do?

## Dynamic Image Generation

The solution was to create an api endpoint that dynamically generates an image file of 2 games stitched together. To do this I used the <a href="https://www.npmjs.com/package/canvas">canvas npm package</a>. It's fairly straight forward to add 2 images to a canvas element in html. But since this is happening on the server I had to use this node package which implements the canvas element outside of a browser context. I'll admit I was worried this was going to be a duanting task, but it was fairly easy to do once I understood the basic concepts. And the function only ended up being a little over 20 lines of code:

```typescript
import { createCanvas, loadImage } from "canvas";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

export const generateMergedImage = async (
  coverAUrl: string,
  coverBUrl: string,
) => {
  const imageA = await loadImage(coverAUrl);
  const imageB = await loadImage(coverBUrl);
  const imageCanvas = createCanvas(
    imageA.naturalWidth + imageB.naturalWidth,
    Math.max(imageA.naturalHeight, imageB.naturalHeight),
  );
  const context = imageCanvas.getContext("2d");

  context.drawImage(imageA, 0, 0);
  context.drawImage(imageB, imageA.naturalWidth, 0);

  const tempDir = path.join(__dirname, "../temp");
  if (!existsSync(tempDir)) mkdirSync(tempDir);
  const filePath = path.join(tempDir, "temp.png");
  writeFileSync(filePath, imageCanvas.toBuffer("image/png"));
  return filePath;
};
```

With that function complete, it was simple to create an endpoint that, given 2 game Ids, could invoke the function and return a finished image of 2 game cover arts stitched together.

<a href="https://gamesheadtohead.com/app/image?a=1037&b=1979">https://gamesheadtohead.com/app/image?a=1037&b=1979</a>
![zelda vs battlefield](https://gamesheadtohead.com/app/image?a=1037&b=1979)

## Injecting the meta tags

But we're not quite done yet! Just because we have the endpoint doesn't mean this image will automatically show up when sharing a link. The actual line of code that makes links appear as images is that magical meta tag with the `og:image` property. This needs to be in the html file served from the share battle link. This game battle webpag is a react app, which means it's serving the exact same html file for every page request. So how can be make sure that links to specific game comparisons have the correct meta tag. To be honest, I was impatient and didn't research exactly what you're "supposed" to do because I realized it would be pretty easy to just add the meta tag to the html with a good old fashioned String.replace() call.

The server endpoint that serves static files runs a quick check to see if the url is `/share`. It then grabs the ids of the games be compared from query params in the url. And from that it can generate the url to fetch the stiched image. The html file served contains a string `<!--inject-here-->`. Before serving the html string we simply replace that with the meta tags. Here's the function I wrote to do that:

```Typescript
export const getMetaTags = (
  url: URL,
  description: string = "Rank your favorite games in 1 vs 1 battles.",
  imageUrl?: string,
) => {
  if (imageUrl === undefined) {
    imageUrl = `${url.origin}/app/title`;
  }

  return `
		<!-- HTML Meta Tags -->
		<title>Games Head-To-Head</title>
		<meta name="description" content="${description}">

		<!-- Open Graph Meta Tags -->
		<meta property="og:url" content="${url.origin}">
		<meta property="og:type" content="website">
		<meta property="og:title" content="Games Head-To-Head">
		<meta property="og:description" content="${description}">
		<meta property="og:image" content="${imageUrl}">
		<meta property="og:image:width"" content="528">
		<meta property="og:image:height"" content="352">

		<!-- Twitter Meta Tags -->
		<meta name="twitter:card" content="summary_large_image">
		<meta property="twitter:domain" content="${url.host}">
		<meta property="twitter:url" content="${url.origin}">
		<meta name="twitter:title" content="Games Head-To-Head">
		<meta name="twitter:description" content="${description}">
		<meta name="twitter:image" content="${imageUrl}">

		<!-- Meta Tags Generated via https://opengraph.dev -->
  `;
};
```

The default values for `description` and `imageurl` are used for any page that isn't a `/share` page.
