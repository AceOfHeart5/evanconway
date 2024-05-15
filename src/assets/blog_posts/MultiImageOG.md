# Multiple images in an open graph meta tag

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

This is the technology that allows links to "look good" on various sites and in different applications.
