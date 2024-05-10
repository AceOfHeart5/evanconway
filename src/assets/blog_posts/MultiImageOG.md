# Multiple images in an open graph meta tag

A while ago I made this website: [gamesheadtohead.com](https://gamesheadtohead.com). It gives you 2 games and you get to pick your favorite between them. While building the features I ran into some pretty fun combinations, like [Lego Racers](https://www.igdb.com/games/lego-racers) vs [Oblivion](https://www.igdb.com/games/the-elder-scrolls-iv-oblivion). And I'd share these combos with my friends by taking a screen shot and posting it to discord.

![Lego Racers](https://images.igdb.com/igdb/image/upload/t_cover_big/co6xs1.png)
![Oblivion](https://images.igdb.com/igdb/image/upload/t_cover_big/co1tc8.png)

But I quickly realized that process is annoying and it'd be very cool if there was some way to make sharing battles a feature of the website.

## A share page using query params

Since I'd already designed the battle page, which grabs the images for 2 games based on their Ids, it was easy to make a "share battle" page which simply displays 2 games without all the battle features. I decided to use query params to determine which games would be shown.

However, this didn't have quite the same effect as posting a screen shot online. In all the contexts I was sharing these images, the image is displayed immediately, and the viewer can see the game art for both games. I think this is important to the feeling of sharing these game comparisons. If you know a game, there are all sorts of emotions and history tied to that cover art. I wanted to evoke that when sharing the games. So a bland link really wasn't going to cut it as a sharing feature.

## Images from links

But I knew from experience that often when posting a link online, let's use Discord as an example, that link will have some sort of image displayed below it.

// example of image from link

This is what I wanted. Users should be able to just post a link to see images.
