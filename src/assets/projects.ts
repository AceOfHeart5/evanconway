import eviltower01 from './project_images/eviltower01.png';
import eviltower02 from './project_images/eviltower02.png';
import botcommand from './project_images/botcommand.gif';
import botdemonstrate from './project_images/botdemonstrate.gif';
import uparrow from './project_images/uparrow.gif';
import sitereadingapp from './project_images/sitereadingapp.png';
import textcode from './project_images/textcode.png';
import textcolors from './project_images/textcolors.gif';
import textcombine from './project_images/textcombine.gif';
import texttyping from './project_images/texttyping.gif';
import guestbookScreenshot from './project_images/guestbook.png';
import topDownAdventure from './project_images/topdownadventure.png';
import dialogSceneCode from './project_images/DialogScene_Code.png';
import dialogSceneExample from './project_images/DialogScene_Example.gif';
import scoreApp01 from './project_images/scoreapp01.png';
import scoreApp02 from './project_images/scoreapp02.png';
import pixelmoveGood from './project_images/Pixel Move Good.png';
import pixelmoveBad from './project_images/Pixel Move Bad.png';
import stairstep from './project_images/pixelmove_stairsteps.gif';
import stairstepFixed from './project_images/pixelmove_fixed_movement.gif';

interface Project {
    title: string,
    linkGithub?: string,
    linkProject?: string,
    images?: { imageLink: string, altText: string }[],
    markdownDescriptionPath?: string,
}

const getProjectDescriptionPath = (markdownFileName: string) => {
    return `/src/assets/project_descriptions/${markdownFileName}.md`;
};

const PROJECTS: Project[] = [
    {
        title: "PixelMove",
        linkGithub: "https://github.com/AceOfHeart5/pixelmove",
        linkProject: "https://gla55world.itch.io/pixelmove-demo",
        images: [
            { imageLink: pixelmoveBad, altText: "Traced line of bad movement." },
            { imageLink: pixelmoveGood, altText: "Traced line of good movement." },
            { imageLink: stairstep, altText: "Screen shot of bad pixel movement." },
            { imageLink: stairstepFixed, altText: "Screen shot of fixed pixel movement." },
        ],
        markdownDescriptionPath: getProjectDescriptionPath("pixelmove"),
    },
    {
        title: "Score Keeping Web App",
        linkGithub: "https://github.com/AceOfHeart5/game-life-tracker",
        linkProject: "https://aceofheart5.github.io/game-life-tracker/",
        images: [
            { imageLink: scoreApp01, altText: "Screen shot of score keeping app." },
            { imageLink: scoreApp02, altText: "Screen shot of options modal in score keeping app." },
        ],
        markdownDescriptionPath: getProjectDescriptionPath("scorekeeper"),
    },
    {
        title: "Dialog Tree",
        linkGithub: "https://github.com/AceOfHeart5/DialogScene",
        linkProject: "https://gla55world.itch.io/dialog-scene-test?secret=FWyPf45aSyQESRo9k7sMDmlhaM0",
        images: [
            { imageLink: dialogSceneCode, altText: "dialog scene code" },
            { imageLink: dialogSceneExample, altText: "dialog scene example" },
        ],
        markdownDescriptionPath: getProjectDescriptionPath("dialogtree"),
    },
    {
        title: "Guestbook",
        linkGithub: "https://github.com/AceOfHeart5/guestbook-backend",
        linkProject: "https://guestbook-l5nnz.ondigitalocean.app/",
        images: [
            { imageLink: guestbookScreenshot, altText: "guestbook app" },
        ],
        markdownDescriptionPath: getProjectDescriptionPath("guestbook"),
    },
    {
        title: "Text Boxes",
        linkGithub: "https://github.com/AceOfHeart5/Text_Boxes",
        images: [
            { imageLink: textcode, altText: "Code for colored text." },
            { imageLink: textcolors, altText: "Colored text." },
            { imageLink: textcombine, altText: "Combined text effects with typing." },
            { imageLink: texttyping, altText: "Special typing effects." },
        ],
        markdownDescriptionPath: getProjectDescriptionPath("textboxes"),
    },
    {
        title: "Discord Bot",
        linkGithub: "https://github.com/AceOfHeart5/Meme-Machine-discord-bot",
        images: [
            { imageLink: uparrow, altText: "Up arrow reaction." },
            { imageLink: botcommand, altText: "Programming a discord bot." },
            { imageLink: botdemonstrate, altText: "Bot performing its program." },
        ],
        markdownDescriptionPath: getProjectDescriptionPath("discordbot"),
    },
    {
        title: "Piano Sight-Reading Web App",
        linkGithub: "https://github.com/AceOfHeart5/piano-sight-reading",
        linkProject: "https://aceofheart5.github.io/piano-sight-reading/",
        images: [
            { imageLink: sitereadingapp, altText: "Screen shot of piano sight-reading app." },
        ],
        markdownDescriptionPath: getProjectDescriptionPath("sightreading")
    },
    {
        title: "GameMaker Studio Prototype",
        linkGithub: "https://github.com/AceOfHeart5/TopDownAdventure/tree/2.3update",
        linkProject: "https://gla55world.itch.io/top-down-adventure",
        images: [
            { imageLink: topDownAdventure, altText: "Top down adventure game prototype." },
        ],
        markdownDescriptionPath: getProjectDescriptionPath("topdown")
    },
    {
        title: "GameMaker Studio Game",
        linkGithub: "https://github.com/AceOfHeart5/evil-tower",
        linkProject: "https://gla55world.itch.io/the-evil-tower",
        images: [
            { imageLink: eviltower01, altText: "Screenshot of GameMaker game." },
            { imageLink: eviltower02, altText: "Screenshot of GameMaker game." },
        ],
        markdownDescriptionPath: getProjectDescriptionPath("eviltower"),
    },
    {
        title: "Music",
        linkProject: "https://www.universalproductionmusic.com/en-us/search?q=evan%20conway&qtext=evan%20conway&vtag=0&vwave=0&vdesc=1&ktype=6",
        markdownDescriptionPath: getProjectDescriptionPath("music"),
    }
];

export default PROJECTS;
