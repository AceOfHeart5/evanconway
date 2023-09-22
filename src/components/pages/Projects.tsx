import IMAGES from '../../assets/images.js';
import Project from '../Project.js';
import { Container, Grid } from '@mui/material';

const Projects = () => {
    return <Container>
        <Grid container spacing={3} justifyContent={"center"}>
            <Project
                title="Score Keeping Web App"
                linkGithub="https://github.com/AceOfHeart5/game-life-tracker"
                linkProject="https://aceofheart5.github.io/game-life-tracker/"
                images={[
                    { imageLink: IMAGES.scoreApp.one, altText: "Screen shot of score keeping app." },
                    { imageLink: IMAGES.scoreApp.two, altText: "Screen shot of options modal in score keeping app." },
                ]}
                markdownFileName="scorekeeper"
            />
            <Project
                title="Dialog Tree"
                linkGithub="https://github.com/AceOfHeart5/DialogScene"
                linkProject="https://gla55world.itch.io/dialog-scene-test?secret=FWyPf45aSyQESRo9k7sMDmlhaM0"
                images={[
                    { imageLink: IMAGES.dialogScene.code, altText: "dialog scene code" },
                    { imageLink: IMAGES.dialogScene.example, altText: "dialog scene example" },
                ]}
                markdownFileName="dialogtree"
            />
            <Project
                title="Guestbook"
                linkGithub="https://github.com/AceOfHeart5/guestbook-backend"
                linkProject="https://guestbook-l5nnz.ondigitalocean.app/"
                images={[
                    { imageLink: IMAGES.guestbook, altText: "guestbook app" },
                ]}
                markdownFileName="guestbook"
            />
            <Project
                title="Text Boxes"
                linkGithub="https://github.com/AceOfHeart5/Text_Boxes"
                images={[
                    { imageLink: IMAGES.text.code, altText: "Code for colored text." },
                    { imageLink: IMAGES.text.colors, altText: "Colored text." },
                    { imageLink: IMAGES.text.combine, altText: "Combined text effects with typing." },
                    { imageLink: IMAGES.text.typing, altText: "Special typing effects." },
                ]}
                markdownFileName="textboxes"
            />
            <Project
                title="Discord Bot"
                linkGithub="https://github.com/AceOfHeart5/Meme-Machine-discord-bot"
                images={[
                    { imageLink: IMAGES.discordbot.uparrow, altText: "Up arrow reaction." },
                    { imageLink: IMAGES.discordbot.command, altText: "Programming a discord bot." },
                    { imageLink: IMAGES.discordbot.demonstrate, altText: "Bot performing its program." },
                ]}
                markdownFileName={`discordbot`}
            />
            <Project
                title="Piano Sight-Reading Web App"
                linkGithub="https://github.com/AceOfHeart5/piano-sight-reading"
                linkProject="https://aceofheart5.github.io/piano-sight-reading/"
                images={[
                    { imageLink: IMAGES.sitereadingapp, altText: "Screen shot of piano sight-reading app." },
                ]}
                markdownFileName="sightreading"
            />
            <Project
                title="GameMaker Studio Prototype"
                linkGithub="https://github.com/AceOfHeart5/TopDownAdventure/tree/2.3update"
                linkProject="https://gla55world.itch.io/top-down-adventure"
                images={[
                    { imageLink: IMAGES.topDownAdventure, altText: "Top down adventure game prototype." },
                ]}
                markdownFileName="topdown"
            />
            <Project
                title="GameMaker Studio Game"
                linkGithub="https://github.com/AceOfHeart5/evil-tower"
                linkProject="https://gla55world.itch.io/the-evil-tower"
                images={[
                    { imageLink: IMAGES.eviltower.one, altText: "Screenshot of GameMaker game." },
                    { imageLink: IMAGES.eviltower.two, altText: "Screenshot of GameMaker game." },
                ]}
                markdownFileName="eviltower"
            />
            <Project
                title="Music"
                linkProject="https://www.universalproductionmusic.com/en-us/search?q=evan%20conway&qtext=evan%20conway&vtag=0&vwave=0&vdesc=1&ktype=6"
                markdownFileName="music"
            />
        </Grid>
    </Container>;
}

export default Projects;
