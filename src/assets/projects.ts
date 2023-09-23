import IMAGES from "./images";

import dialogtree from "./project_descriptions/dialogtree.md";
import discordbot from './project_descriptions/discordbot.md';
import eviltower from './project_descriptions/eviltower.md';
import guestbook from './project_descriptions/guestbook.md';
import music from './project_descriptions/music.md';
import pixelmove from './project_descriptions/pixelmove.md';
import scorekeeper from './project_descriptions/scorekeeper.md';
import sightreading from './project_descriptions/sightreading.md';
import textboxes from './project_descriptions/textboxes.md';
import topdown from './project_descriptions/topdown.md';

interface Project {
    title: string,
    linkGithub?: string,
    linkProject?: string,
    images?: { imageLink: string, altText: string }[],
    markdownDescriptionPath?: string,
}

const PROJECTS: Project[] = [
    {
        title: "PixelMove",
        linkGithub: "https://github.com/AceOfHeart5/pixelmove",
        linkProject: "https://gla55world.itch.io/pixelmove-demo",
        images: [
            { imageLink: IMAGES.pixelmove.bad, altText: "Traced line of bad movement." },
            { imageLink: IMAGES.pixelmove.good, altText: "Traced line of good movement." },
            { imageLink: IMAGES.pixelmove.exampleBad, altText: "Screen shot of bad pixel movement." },
            { imageLink: IMAGES.pixelmove.exampleGood, altText: "Screen shot of fixed pixel movement." },
        ],
        markdownDescriptionPath: pixelmove,
    },
    {
        title: "Score Keeping Web App",
        linkGithub: "https://github.com/AceOfHeart5/game-life-tracker",
        linkProject: "https://aceofheart5.github.io/game-life-tracker/",
        images: [
            { imageLink: IMAGES.scoreApp.one, altText: "Screen shot of score keeping app." },
            { imageLink: IMAGES.scoreApp.two, altText: "Screen shot of options modal in score keeping app." },
        ],
        markdownDescriptionPath: scorekeeper,
    },
    {
        title: "Dialog Tree",
        linkGithub: "https://github.com/AceOfHeart5/DialogScene",
        linkProject: "https://gla55world.itch.io/dialog-scene-test?secret=FWyPf45aSyQESRo9k7sMDmlhaM0",
        images: [
            { imageLink: IMAGES.dialogScene.code, altText: "dialog scene code" },
            { imageLink: IMAGES.dialogScene.example, altText: "dialog scene example" },
        ],
        markdownDescriptionPath: dialogtree,
    },
    {
        title: "Guestbook",
        linkGithub: "https://github.com/AceOfHeart5/guestbook-backend",
        linkProject: "https://guestbook-l5nnz.ondigitalocean.app/",
        images: [
            { imageLink: IMAGES.guestbook, altText: "guestbook app" },
        ],
        markdownDescriptionPath: guestbook,
    },
    {
        title: "Text Boxes",
        linkGithub: "https://github.com/AceOfHeart5/Text_Boxes",
        images: [
            { imageLink: IMAGES.text.code, altText: "Code for colored text." },
            { imageLink: IMAGES.text.colors, altText: "Colored text." },
            { imageLink: IMAGES.text.combine, altText: "Combined text effects with typing." },
            { imageLink: IMAGES.text.typing, altText: "Special typing effects." },
        ],
        markdownDescriptionPath: textboxes,
    },
    {
        title: "Discord Bot",
        linkGithub: "https://github.com/AceOfHeart5/Meme-Machine-discord-bot",
        images: [
            { imageLink: IMAGES.discordbot.uparrow, altText: "Up arrow reaction." },
            { imageLink: IMAGES.discordbot.command, altText: "Programming a discord bot." },
            { imageLink: IMAGES.discordbot.demonstrate, altText: "Bot performing its program." },
        ],
        markdownDescriptionPath: discordbot,
    },
    {
        title: "Piano Sight-Reading Web App",
        linkGithub: "https://github.com/AceOfHeart5/piano-sight-reading",
        linkProject: "https://aceofheart5.github.io/piano-sight-reading/",
        images: [
            { imageLink: IMAGES.sitereadingapp, altText: "Screen shot of piano sight-reading app." },
        ],
        markdownDescriptionPath: sightreading,
    },
    {
        title: "GameMaker Studio Prototype",
        linkGithub: "https://github.com/AceOfHeart5/TopDownAdventure/tree/2.3update",
        linkProject: "https://gla55world.itch.io/top-down-adventure",
        images: [
            { imageLink: IMAGES.topDownAdventure, altText: "Top down adventure game prototype." },
        ],
        markdownDescriptionPath: topdown,
    },
    {
        title: "GameMaker Studio Game",
        linkGithub: "https://github.com/AceOfHeart5/evil-tower",
        linkProject: "https://gla55world.itch.io/the-evil-tower",
        images: [
            { imageLink: IMAGES.eviltower.one, altText: "Screenshot of GameMaker game." },
            { imageLink: IMAGES.eviltower.two, altText: "Screenshot of GameMaker game." },
        ],
        markdownDescriptionPath: eviltower,
    },
    {
        title: "Music",
        linkProject: "https://www.universalproductionmusic.com/en-us/search?q=evan%20conway&qtext=evan%20conway&vtag=0&vwave=0&vdesc=1&ktype=6",
        markdownDescriptionPath: music,
    }
];

export default PROJECTS;
