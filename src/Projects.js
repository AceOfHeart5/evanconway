import IMAGES from './assets/images.js';

const Projects = () => {
    return (
        <div>
            <section style={{ paddingBottom: "10px" }} className="project">
                <a href="https://github.com/AceOfHeart5?tab=repositories" className="projectlink">Link To Github</a>
            </section>
            <section className="project">
                <a className="projectlink" href="https://github.com/AceOfHeart5/Text_Boxes">Text Boxes</a>
                <h3>Flexible text display for Game Maker Studio projects.</h3>
                <img src={IMAGES.text.code} alt="Code for colored text."/>
                <img src={IMAGES.text.colors} alt="Colored text."/>
                <img src={IMAGES.text.combine} alt="Combined text effects with typing." />
                <img src={IMAGES.text.typing} alt="Special typing effects." />
                <p>
                    A key part of any video game is text boxes. Whenever I'm working on a project, I often find myself wanting to draw text with a single word highlighted a different 
                    color, or maybe one word floats in place. This isn't that hard to do, but it's very annoying to have to do it over again for each project. I also wanted to display 
                    text that could type out, but still have special effects added. So I made a special collection of classes and functions to give text interesting effects. 
                </p>
            </section>
            <section className="project">
                <a className="projectlink" href="https://github.com/AceOfHeart5/Meme-Machine-discord-bot">Discord Bot</a>
                <h3>A bot for a private Discord server.</h3>
                <img src={IMAGES.discordbot.uparrow} alt="up arrow reaction" />
                <img src={IMAGES.discordbot.command} alt="Programming a discord bot."/>
                <img src={IMAGES.discordbot.demonstrate} alt="Bot performing its program."/>
                <p>
                    I was inspired to make this bot after a friend made a Beetljuice reference on a private server as a joke to "summon" us. It also converts messages containing only '^' into 
                    up arrow reactions on the previous message. It's main feature though, is programmable responses. If a user sends a message with the syntax: Hey bot! When I say "call" you say "response", 
                    the bot will respond with "response" anytime someone messages the "call". 
                </p>
            </section>
            <section className="project">
                <a className="projectlink" href="https://aceofheart5.github.io/WebMidiLearning/">Piano Site Reading Web App</a>
                <h3>Web app for practicing sight reading with an electric piano.</h3>
                <img src={IMAGES.sitereadingapp} alt="pic of sheet music app"/>
                <main>
                    <p>
                        Finding good material to practice sight reading is difficult. The music can't be too hard or easy, and you need a lot of music to read through in order to make 
                        any real improvement. In the past I've used typing test programs to improve my typing speed, so I thought I'd make something similar, but for sight reading. The 
                        app randomly generates sheet music according to options set by the user. When run in a supported brower (Google Chrome is the only one right now), the app can 
                        detect midi input from an electric piano. The green highlighted note cursor will only advance once the correct notes have been played. 
                    </p>
                </main>
            </section>
            <section className="project">
                <a className="projectlink" href="https://gla55world.itch.io/the-evil-tower">Game Maker Studio Project</a>
                <h3>A short side scroller action platformer made in Game Maker Studio 2.</h3>
                <img src={IMAGES.eviltower.one} alt="pic of a video game" />
                <main>
                    <p>
                        My goal when creating this game was to uncover all the unexpected challenges involved in making a complete game. The content of this game is minimal, but 
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
                        <li>typing effect in text boxes</li>
                    </ul>
                </main>
            </section>
            <section className="project">
                <a className="projectlink" href="https://www.licenselab.com/search/tracks/list/k_conway/">Music</a>
                <h3>250+ pieces of music written for TV, radio, and various media.</h3>
                <p>
                    Each song is part of an album, and each album fits a specific theme or mood. Some of my favorites are <a href="https://www.licenselab.com/track/8c1c1ca2bc3c191f/beautiful-entanglement">Beautiful Entanglement</a>, <a href="https://www.licenselab.com/track/1d98ce3e652151e5/nuts-and-bolts">Nuts And Bolts</a>, <a href="https://www.licenselab.com/track/9c79172e951d2ebb/glorious-dawn">Glorious Dawn</a>, and <a href="https://www.licenselab.com/track/d537ecbc9ed581ad/adorable-saves-the-day">Adorable Saves The Day</a>.
                </p>
            </section>
            <section className="project">
                <a href="https://github.com/AceOfHeart5/AceOfHeart5.github.io" className="projectlink">This Website</a>
                <p>This site was made with React. Honestly React is waaaaaaay overkill for this, but I wanted more experience with React, and what better way to do that than to make something.</p>
            </section>
        </div>
    );
}

export default Projects;
