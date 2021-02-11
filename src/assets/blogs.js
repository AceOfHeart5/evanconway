import IMAGES from './images';

const BLOGS = [
    {
        title: "Sprite Animations",
        description: "How to make sprites look cool",
        body: <article>
            <h1>Sprite Animations </h1>
            <p>Aliquam hic numquam cupiditate, commodi eaque perferendis excepturi error repudiandae earum ratione repellendus architecto provident adipisci?</p>
        </article>
    },
    {
        title: "Audio and Music Looping",
        description: "Creating sounds in-game and looping you favorite tracks.",
        body: <article>
            <h1>Audio and Music Looping</h1>
            <p>Aliquam, natus dolorem eius quaerat commodi adipisci, ea at necessitatibus eaque magnam itaque totam maxime illo sequi quam aperiam quis provident minima.</p>
        </article>
    },
    {
        title: "Making a game in Game Maker Studio",
        description: "Discovering a love for programming, and uncovering all the challenges of making a feature complete video game.",
        body: <article>
            <h1>The Evil Tower</h1>
            <a href="https://gla55world.itch.io/the-evil-tower">
                <img src={IMAGES.eviltower.one} alt="guy swinging sword"/>
            </a>
            <a href="https://gla55world.itch.io/the-evil-tower">
                <img src={IMAGES.eviltower.two} alt="standing on ladder"/>
            </a>
            <p>
                There have been a number of times in my life where I've tried to make a video game, or get into game programming. But not being a programmer, and not really knowing 
                where to look for help, I've always gotten frustrated and given up. 
            </p>
        </article>
    }
];

export default BLOGS;
