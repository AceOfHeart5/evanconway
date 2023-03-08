const About = () => {
    const noBottom = { marginBottom: "0px"};
    const smallTop = { marginTop: "5px"};

    return (
        <article style={{ maxWidth: "900px" }}>
            <p style={{paddingBottom: "10px", borderColor: "grey", borderBottomStyle: "solid"}}>
                Evan Conway is a composer and programmer based in Brooklyn, NY. He wrote music for the Modus Operandi music library and has been pursuing 
                programming professionally since 2018. In his spare time, he writes games with GameMaker Studio 2.
            </p>
            <h1>Experience</h1>
            <h4 style={noBottom}>Junior Software Engineer</h4>
            <h5 style={smallTop}>Zverse/Revaly, October 2021 to Present</h5>
            <ul>
                <li>Assisted building Revaly, a real-time multiplayer 3D design review web app (comparable to Google Docs + Github + Miro for 3D)</li>
                <li>Wrote frontend tests using Playwright and integrated them into the main repo as a Github workflow</li>
                <li>Made dozens of React components using Typescript, MUI, CSS, Tailwind, Redux, and Apollo GraphQL</li>
                <li>Used data structures and algorithms to optimize manipulating individual sections of complex models</li>
                <li>Integrated permissions data with frontend, and wrote Supabase migration for PostgreSQL function to give accounts content control over hundreds of users</li>
                <li>Built convenient wrapper functions for logging user interaction to Azure app-insights, simplifying tracking user workflow</li>
                <li>Worked directly with the Director of UX to improve accessibility through aria labels, correct semantic tags, and mui-tooltips</li>
            </ul>
            <h4 style={noBottom}>Software Engineering Intern</h4>
            <h5 style={smallTop}>co:census, June 2021 to September 2021</h5>
            <ul>
                <li>Creates chatbots with Twilio Studio</li>
                <li>Automates creation of Twilio Flows using Go</li>
                <li>Created custom JSON format to represent sms surveys</li>
            </ul>
            <h4 style={noBottom}>Composer</h4>
            <h5 style={smallTop}>June 2011 to October 2021</h5>
            <ul>
                <li>Composed stock music for Modus Operandi music library</li>
                <li>Has pieces aired on Fox, CBS, NBC, and globally</li>
            </ul>
            <h4 style={noBottom}>Participant at the Recurse Center</h4>
            <h5 style={smallTop}>Recurse Center, July 2020 to September 2020</h5>
            <ul>
                <li>Learned JavaScript, HTML, and CSS independently</li>
                <li>Learned abcjs music notation library to display sheet music in HTML</li>
                <li>Created JavaScript classes to model pitches and chords and randomly generate notes</li>
                <li>Created a music sight reading app</li>
                <li>Created GameMaker text boxes with string parser to customize text appearance</li>
                <li>Created movement code for 2D games using Bresenham's line llgorithm</li>
                <li>Solved LeetCode questions in daily virtual pairing sessions with experienced devs</li>
                <li>Led morning check-ins and MC'd weekly music listening group</li>
                <li>Attended virtual programming lectures on machine learning, frontend web dev, and more</li>
            </ul>
            <h4 style={noBottom}>Piano Teacher</h4>
            <h5 style={smallTop}>Hartland Music, September 2013 to June 2018</h5>
            <ul>
                <li>Gave lessons to students aged 6 to 65</li>
                <li>Organized studio events, recitals, and competition entrances</li>
            </ul>
            <h4 style={noBottom}>Programmer</h4>
            <h5 style={smallTop}>Zerrez Solutions, November 2014 to July 2015</h5>
            <ul>
                <li>Assisted in building a 2D modeling application in JavaScript and C++/QT</li>
            </ul>
            <h4 style={noBottom}>Associate in Science, Computer Science</h4>
            <h5 style={smallTop}>Monroe Community College, June 2020</h5>
            <h4 style={noBottom}>Bachelor of Music, Piano Performance</h4>
            <h5 style={smallTop}>Lawrence University, June 2013</h5>
        </article>
    );
};
 
export default About;
