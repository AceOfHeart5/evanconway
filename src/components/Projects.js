import IMAGES from '../assets/images.js';

const Projects = () => {

    const getHeader = (title, linkGithub = null, linkProject = null) => {
        const result = [];
        result.push(<h2>{title}</h2>);
        if (linkGithub !== null) {
            result.push(
                <a href={linkGithub} className="link-github" style={{paddingRight: '10px'}}>Github</a>
            )
        }
        if (linkProject !== null) {
            result.push(
                <a href={linkProject} className="link-project">Project</a>
            )
        }
        return (
            <div style={{paddingBottom: '15px'}}>{result}</div>
        );
    };

    return (
        <div>
            <section style={{ paddingBottom: "10px" }} className="project">
                <a href="https://github.com/AceOfHeart5?tab=repositories" className="projectlink">Link To Github</a>
            </section>
            <section className="project">
                {getHeader('Dialog Tree', 'https://github.com/AceOfHeart5/DialogScene', 'https://gla55world.itch.io/dialog-scene-test?secret=FWyPf45aSyQESRo9k7sMDmlhaM0')}
                <img src={IMAGES.dialogScene.code} alt='dialog scene code'/>
                <img src={IMAGES.dialogScene.example} alt='dialog scene example'/>
                <p>
                    Making dialog trees in games is hard. This is one of my first attempts at making a system that makes it easy to
                    create dialog right in the code. 
                </p>
            </section>
            <section className="project">
                {getHeader('Guestbook', 'https://github.com/AceOfHeart5/guestbook-backend', 'https://guestbook-l5nnz.ondigitalocean.app/')}
                <img src={IMAGES.guestbook} alt="guestbook app"/>
                <p>
                    A simple guestbook app. Made with React, Express, and Postgres hosted on Digital Ocean.
                </p>
            </section>
            <section className="project">
                {getHeader('Time Manager', 'https://github.com/AceOfHeart5/TimeManager', 'https://time-manager-hhvqs.ondigitalocean.app/')}
                <img src={IMAGES.timemanager} alt="time manager app"/>
                <p>
                    A time management app to keep track of time spent on tasks. Made with React.
                </p>
            </section>
            <section className="project">
                {getHeader('Text Boxes', 'https://github.com/AceOfHeart5/Text_Boxes')}
                <img src={IMAGES.text.code} alt="Code for colored text."/>
                <img src={IMAGES.text.colors} alt="Colored text."/>
                <img src={IMAGES.text.combine} alt="Combined text effects with typing." />
                <img src={IMAGES.text.typing} alt="Special typing effects." />
                <p>
                    A key part of any video game is text boxes. When I'm working on a project, I often find myself wanting to draw text with a single word highlighted a different 
                    color or maybe floating in place. This isn't that hard to do, but it's cumbersome to have to do it over again for each project. I also wanted to display 
                    text that could type out still have added special effects. So I made a special collection of classes and functions to give text interesting effects. 
                </p>
            </section>
            <section className="project">
                {getHeader('Discord Bot', 'https://github.com/AceOfHeart5/Meme-Machine-discord-bot')}
                <img src={IMAGES.discordbot.uparrow} alt="up arrow reaction" />
                <img src={IMAGES.discordbot.command} alt="Programming a discord bot."/>
                <img src={IMAGES.discordbot.demonstrate} alt="Bot performing its program."/>
                <p>
                    I was inspired to make this bot after a friend made a Beetlejuice reference on a private server as a joke to "summon" us. It also converts messages containing only '^' into 
                    up arrow reactions on the previous message. Its main feature, though, is programmable responses. If a user sends a message with the syntax "Hey bot! When I say 'call' you say 'response'", 
                    the bot will respond with "response" anytime someone messages the "call". 
                </p>
            </section>
            <section className="project">
                {getHeader('Piano Sight-Reading Web App', 'https://github.com/AceOfHeart5/piano-sight-reading', 'https://aceofheart5.github.io/piano-sight-reading/')}
                <img src={IMAGES.sitereadingapp} alt="pic of sheet music app"/>
                <p>
                    Finding good material to practice sight-reading is difficult. The music can't be too hard or easy, and you need a lot of music to read through in order to make 
                    any real improvement. In the past I've used typing test programs to improve my typing speed, so I thought I'd make something similar, but for sight reading. The 
                    app randomly generates sheet music according to options set by the user. When run in a supported browser (just Google Chrome right now), the app can 
                    detect MIDI input from an electric piano. The green-highlighted note cursor only advances once the correct notes have been played. 
                </p>
            </section>
            <section className="project">
                {getHeader('GameMaker Studio Prototype', 'https://github.com/AceOfHeart5/TopDownAdventure/tree/2.3update', 'https://gla55world.itch.io/top-down-adventure')}
                <img src={IMAGES.topDownAdventure} alt="pic of a video game"/>
                <p>
                    This project was about exploring GameMaker in further depth. I spent most of my time with this project making a modular state system.
                </p>
            </section>
            <section className="project">
                {getHeader('GameMaker Studio Project', 'https://github.com/AceOfHeart5/evil-tower', 'https://gla55world.itch.io/the-evil-tower')}
                <img src={IMAGES.eviltower.one} alt="pic of a video game" />
                <p>
                    My goal in creating this game was to uncover all the unexpected challenges involved in making a complete game. The content of this game is minimal, but 
                    it does have most of the features anyone would expect from a modern indie game:
                </p>
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
            </section>
            <section className="project">
                {getHeader('Music', null, 'https://www.licenselab.com/search/tracks/list/k_conway/')}
                <p>
                    Over 250 piese of music written for TV, radio, and various media. Each song is part of an album, and each album fits a 
                    specific theme or mood. Some of my favorites are <a href="https://www.licenselab.com/track/8c1c1ca2bc3c191f/beautiful-entanglement">Beautiful Entanglement</a>, <a href="https://www.licenselab.com/track/1d98ce3e652151e5/nuts-and-bolts">Nuts And Bolts</a>, <a href="https://www.licenselab.com/track/9c79172e951d2ebb/glorious-dawn">Glorious Dawn</a>, and <a href="https://www.licenselab.com/track/d537ecbc9ed581ad/adorable-saves-the-day">Adorable Saves The Day</a>.
                </p>
            </section>
            <section className="project">
                {getHeader('This Website', 'https://github.com/AceOfHeart5/AceOfHeart5.github.io')}
                <p>This site was made with React. Honestly React is waaaaaaay overkill for this, but I wanted more experience with React, and what better way to accomplish that than to make something?</p>
            </section>
        </div>
    );
}

export default Projects;
