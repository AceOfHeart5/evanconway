// import eviltower01 from './project_images/eviltower01.png';
// import eviltower02 from './project_images/eviltower02.png';
import botcommand from './project_images/botcommand.gif';
import botdemonstrate from './project_images/botdemonstrate.gif';
import uparrow from './project_images/uparrow.gif';
import sitereadingapp from './project_images/sitereadingapp.png';
import textcode from './project_images/textcode.png';
import textcolors from './project_images/textcolors.gif';
import textcombine from './project_images/textcombine.gif';
import texttyping from './project_images/texttyping.gif';
// import topDownAdventure from './project_images/topdownadventure.png';
import dialogSceneCode from './project_images/DialogScene_Code.png';
import dialogSceneExample from './project_images/DialogScene_Example.gif';
import scoreApp01 from './project_images/scoreapp01.png';
import scoreApp02 from './project_images/scoreapp02.png';
import pixelmoveGood from './project_images/Pixel Move Good.png';
import pixelmoveBad from './project_images/Pixel Move Bad.png';
import stairstep from './project_images/pixelmove_stairsteps.gif';
import stairstepFixed from './project_images/pixelmove_fixed_movement.gif';
import montyHall1 from './project_images/montyhall1.png';
import montyHall2 from './project_images/montyhall2.png';
import montyHall3 from './project_images/montyhall3.png';
import millie1 from './project_images/MillieTitlePage.png';
import millie2 from './project_images/MillieShot1.png';
import typingTitle from './project_images/typingtitle.png';
import typingPlay1 from './project_images/typingplay1.png';
import typingPlay2 from './project_images/typingplay2.png';
import rcgame1 from './project_images/rcgame1.png';
import rcgame2 from './project_images/rcgame2.png';
import rcgame3 from './project_images/rcgame3.png';
import gamesHeadToHead1 from './project_images/gamesheadtohead1.jpg';
import gamesHeadToHead2 from './project_images/gamesheadtohead2.png';
import gamesHeadToHead3 from './project_images/gamesheadtohead3.png';

interface Project {
    title: string,
    linkGithub?: string,
    linkProject?: string,
    images?: { imageLink: string, altText: string }[],
    markdownDescription: string,
}

const PROJECTS: Project[] = [
    {
        title: "Games Head-To-Head",
        linkGithub: "https://github.com/evanconway/game-rank-battles",
        linkProject: "https://gamesheadtohead.com",
        images: [
            { imageLink: gamesHeadToHead1, altText: "Game battle page." },
            { imageLink: gamesHeadToHead2, altText: "Game rankings page." },
            { imageLink: gamesHeadToHead3, altText: "Website title." },
        ],
        markdownDescription: "A website where users can pick their favorite games in 1 vs 1 battles."
    },
    {
        title: "The Monty Hall Problem",
        linkGithub: "https://github.com/evanconway/monty-hall-problem",
        linkProject: "https://evanconway.github.io/monty-hall-problem",
        images: [
            { imageLink: montyHall1, altText: "3 door game." },
            { imageLink: montyHall2, altText: "Auto player section." },
            { imageLink: montyHall3, altText: "Example output of 1000 games." },
        ],
        markdownDescription: "A small interactive website that illustrates the Monty Hall Problem."
    },
    {
        title: "Tea Time With Millie",
        linkProject: "https://gla55world.itch.io/tea-time-with-millie",
        images: [
            { imageLink: millie1, altText: 'Millie the pill bug.' },
            { imageLink: millie2, altText: 'Millie in a living room ready to make tea.' },
        ],
        markdownDescription: "A small point and click adventure made in collaboration with an illustrator."
    },
    {
        title: "The Weight of Words",
        linkGithub: "https://github.com/evanconway/gamemaker-web-experiment",
        linkProject: "https://gla55world.itch.io/the-weight-of-words",
        images: [
            { imageLink: typingPlay1, altText: "Searching for game." },
            { imageLink: typingPlay2, altText: "Results screen." },
            { imageLink: typingTitle, altText: "Title screen." },
        ],
        markdownDescription: "Online multiplayer type racing game. Frontend made in GameMaker backend made with NodeJs."
    },
    {
        title: "RC Halloween Hackathon",
        linkGithub: "https://github.com/evanconway/rc-halloween-hackathon",
        linkProject: "https://gx.games/games/b9lass/rc-halloween-hackathon/",
        images: [
            { imageLink: rcgame1, altText: "Gameplay of RC game."},
            { imageLink: rcgame2, altText: "Gameplay of RC game."},
            { imageLink: rcgame3, altText: "Gameplay of RC game."},
        ],
        markdownDescription: "Mockup of the Recurse Center made during 7 day Halloween Hackathon."
    },
    {
        title: "PixelMove",
        linkGithub: "https://github.com/evanconway/pixelmove",
        linkProject: "https://gla55world.itch.io/pixelmove-demo",
        images: [
            { imageLink: pixelmoveBad, altText: "Traced line of bad movement." },
            { imageLink: pixelmoveGood, altText: "Traced line of good movement." },
            { imageLink: stairstep, altText: "Screen shot of bad pixel movement." },
            { imageLink: stairstepFixed, altText: "Screen shot of fixed pixel movement." },
        ],
        markdownDescription: "A GameMaker package to quickly setup pixel perfect movement in low resolution games.",
    },
    {
        title: "Tag Decorated Text",
        linkGithub: "https://github.com/evanconway/tagdecoratedtext/tree/main",
        images: [
            { imageLink: textcode, altText: "Code for colored text." },
            { imageLink: textcolors, altText: "Colored text." },
            { imageLink: textcombine, altText: "Combined text effects with typing." },
            { imageLink: texttyping, altText: "Special typing effects." },
        ],
        markdownDescription: "Animated text library for GameMaker.",
    },
    {
        title: "Score Keeping Web App",
        linkGithub: "https://github.com/evanconway/game-life-tracker",
        linkProject: "https://evanconway.github.io/game-life-tracker/",
        images: [
            { imageLink: scoreApp01, altText: "Screen shot of score keeping app." },
            { imageLink: scoreApp02, altText: "Screen shot of options modal in score keeping app." },
        ],
        markdownDescription: "Scorekeeping app for tabletop games.",
    },
    {
        title: "Dialog Tree",
        linkGithub: "https://github.com/evanconway/dialog",
        linkProject: "https://gla55world.itch.io/dialog-scene-test?secret=FWyPf45aSyQESRo9k7sMDmlhaM0",
        images: [
            { imageLink: dialogSceneCode, altText: "dialog scene code" },
            { imageLink: dialogSceneExample, altText: "dialog scene example" },
        ],
        markdownDescription: "Dialog tree library for GameMaker.",
    },
    {
        title: "Discord Bot",
        linkGithub: "https://github.com/evanconway/Meme-Machine-discord-bot",
        images: [
            { imageLink: uparrow, altText: "Up arrow reaction." },
            { imageLink: botcommand, altText: "Programming a discord bot." },
            { imageLink: botdemonstrate, altText: "Bot performing its program." },
        ],
        markdownDescription: "Discord bot with programmable responses.",
    },
    {
        title: "Piano Sight-Reading Web App",
        linkGithub: "https://github.com/evanconway/piano-sight-reading",
        linkProject: "https://evanconway.github.io/piano-sight-reading/",
        images: [
            { imageLink: sitereadingapp, altText: "Screen shot of piano sight-reading app." },
        ],
        markdownDescription: "Sight-reading app for digital piano.",
    },
    {
        title: "Music",
        linkProject: "https://www.universalproductionmusic.com/en-us/search?q=evan%20conway&qtext=evan%20conway&vtag=0&vwave=0&vdesc=1&ktype=6",
        markdownDescription: "Over 250 pieces of music written for TV, radio, and various media. Some examples are [Beautiful Entanglement](http://links.universalproductionmusic.com/CnDcyu), [Nuts And Bolts](http://links.universalproductionmusic.com/nfgSlm), [Glorious Dawn](http://links.universalproductionmusic.com/T23gTi), and [Adorable Saves The Day](http://links.universalproductionmusic.com/sU9fpv)",
    }
];

export default PROJECTS;
