import IMAGES from '../../assets/images.js';
import Project from '../Project.js';

const Projects = () => {
    return <div>
        <section style={{ paddingBottom: "10px" }} className="project">
            <a href="https://github.com/AceOfHeart5?tab=repositories" style={{
                fontSize: "1.7em",
            }}>Link To Github</a>
        </section>
        <Project
            title="Score Keeping Web App"
            linkGithub="https://github.com/AceOfHeart5/game-life-tracker"
            linkProject="https://aceofheart5.github.io/game-life-tracker/"
            images={[
                { imageLink: IMAGES.scoreApp.one, altText: "Screen shot of score keeping app." },
                { imageLink: IMAGES.scoreApp.two, altText: "Screen shot of options modal in score keeping app." },
            ]}
            description="For tabletop games I've noticed people have started using apps on their phone to keep track of scores or life totals. As a way to practice my React, Redux and CSS skills, I decided to make my own version."
        />
        <Project
            title="Dialog Tree"
            linkGithub="https://github.com/AceOfHeart5/DialogScene"
            linkProject="https://gla55world.itch.io/dialog-scene-test?secret=FWyPf45aSyQESRo9k7sMDmlhaM0"
            images={[
                { imageLink: IMAGES.dialogScene.code, altText: "dialog scene code" },
                { imageLink: IMAGES.dialogScene.example, altText: "dialog scene example" },
            ]}
            description="Making dialog trees in games is hard. This is one of my first attempts at making a system that makes it easy to create dialog right in the code."
        />
        <Project
            title="Guestbook"
            linkGithub="https://github.com/AceOfHeart5/guestbook-backend"
            linkProject="https://guestbook-l5nnz.ondigitalocean.app/"
            images={[
                { imageLink: IMAGES.guestbook, altText: "guestbook app" },
            ]}
            description="A simple guestbook app. Made with React, Express, and Postgres hosted on Digital Ocean."
        />
        {/* this project is old and lame, but we'll leave it here commented out */}
        {/* <Project
            title="Time Manager"
            linkGithub="https://github.com/AceOfHeart5/TimeManager"
            linkProject="https://time-manager-hhvqs.ondigitalocean.app/"
            images={[
                { imageLink: IMAGES.timemanager, altText: "time manager app" },
            ]}
            description="A time management app to keep track of time spent on tasks. Made with React."
        /> */}
        <Project
            title="Text Boxes"
            linkGithub="https://github.com/AceOfHeart5/Text_Boxes"
            images={[
                { imageLink: IMAGES.text.code, altText: "Code for colored text." },
                { imageLink: IMAGES.text.colors, altText: "Colored text." },
                { imageLink: IMAGES.text.combine, altText: "Combined text effects with typing." },
                { imageLink: IMAGES.text.typing, altText: "Special typing effects." },
            ]}
            description="A key part of any video game is text boxes. When I'm working on a project, I often find myself wanting to draw text with a single word highlighted a different color or maybe floating in place. This isn't that hard to do, but it's cumbersome to have to do it over again for each project. I also wanted to display text that could type out still have added special effects. So I made a special collection of classes and functions to give text interesting effects."
        />
        <Project
            title="Discord Bot"
            linkGithub="https://github.com/AceOfHeart5/Meme-Machine-discord-bot"
            images={[
                { imageLink: IMAGES.discordbot.uparrow, altText: "Up arrow reaction." },
                { imageLink: IMAGES.discordbot.command, altText: "Programming a discord bot." },
                { imageLink: IMAGES.discordbot.demonstrate, altText: "Bot performing its program." },
            ]}
            description={`I was inspired to make this bot after a friend made a Beetlejuice reference on a private server as a joke to "summon" us. It also converts messages containing only '^' into up arrow reactions on the previous message. Its main feature, though, is programmable responses. If a user sends a message with the syntax "Hey bot! When I say 'call' you say 'response'", the bot will respond with "response" anytime someone messages the "call".`}
        />
        <Project
            title="Piano Sight-Reading Web App"
            linkGithub="https://github.com/AceOfHeart5/piano-sight-reading"
            linkProject="https://aceofheart5.github.io/piano-sight-reading/"
            images={[
                { imageLink: IMAGES.sitereadingapp, altText: "Screen shot of piano sight-reading app." },
            ]}
            description="Finding good material to practice sight-reading is difficult. The music can't be too hard or easy, and you need a lot of music to read through in order to make any real improvement. In the past I've used typing test programs to improve my typing speed, so I thought I'd make something similar, but for sight reading. The app randomly generates sheet music according to options set by the user. When run in a supported browser (just Google Chrome right now), the app can detect MIDI input from an electric piano. The green-highlighted note cursor only advances once the correct notes have been played."
        />
        <Project
            title="GameMaker Studio Prototype"
            linkGithub="https://github.com/AceOfHeart5/TopDownAdventure/tree/2.3update"
            linkProject="https://gla55world.itch.io/top-down-adventure"
            images={[
                { imageLink: IMAGES.topDownAdventure, altText: "Top down adventure game prototype." },
            ]}
            description="This project was about exploring GameMaker in further depth. I spent most of my time with this project making a modular state system."
        />
        <Project
            title="GameMaker Studio Game"
            linkGithub="https://github.com/AceOfHeart5/evil-tower"
            linkProject="https://gla55world.itch.io/the-evil-tower"
            images={[
                { imageLink: IMAGES.eviltower.one, altText: "Screenshot of GameMaker game." },
                { imageLink: IMAGES.eviltower.two, altText: "Screenshot of GameMaker game." },
            ]}
            description="My goal in creating this game was to uncover all the unexpected challenges involved in making a complete game. The content of this game is minimal, but it does have most of the features anyone would expect from a modern indie game:"
        >
            <ul>
                <li>sprites with animations</li>
                <li>attacking and blocking mechanics</li>
                <li>hitstun</li>
                <li>keyboard and controller support</li>
                <li>rebindable controls</li>
                <li>sound effects</li>
                <li>music</li>
                <li>options menu for changing settings</li>
                <li>cutscenes</li>
                <li>character interactions</li>
                <li>text boxes with typing effects</li>
            </ul>
        </Project>
        <Project
            title="Music"
            linkProject="https://www.universalproductionmusic.com/en-us/search?q=evan%20conway&qtext=evan%20conway&vtag=0&vwave=0&vdesc=1&ktype=6"
        >
            <p>
                Over 250 piese of music written for TV, radio, and various media. Each song is part of an album, and each album fits a 
                specific theme or mood. Some of my favorites are <a href="http://links.universalproductionmusic.com/CnDcyu">Beautiful Entanglement</a>, <a href="http://links.universalproductionmusic.com/nfgSlm">Nuts And Bolts</a>, <a href="http://links.universalproductionmusic.com/T23gTi">Glorious Dawn</a>, and <a href="http://links.universalproductionmusic.com/sU9fpv">Adorable Saves The Day</a>.
            </p>
        </Project>
        <Project
            title="This Website"
            linkGithub="https://github.com/AceOfHeart5/AceOfHeart5.github.io"
            description="This site was made with React. Honestly React is waaaaaaay overkill for this, but I wanted more experience with React, and what better way to accomplish that than to make something?"
        />
    </div>;
}

export default Projects;
