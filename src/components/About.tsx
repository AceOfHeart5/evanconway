import Experience from "./Experience";

const About = () => {
    const noBottom = { marginBottom: "0px" };
    const smallTop = { marginTop: "5px" };

    return (
        <article style={{ maxWidth: "900px" }}>
            <p style={{paddingBottom: "10px", borderColor: "grey", borderBottomStyle: "solid"}}>
                Evan Conway is a composer and programmer based in Brooklyn, NY. He wrote music for the Modus Operandi music library and has been pursuing 
                programming professionally since 2018. In his spare time, he writes games with GameMaker Studio 2.
            </p>
            <h1>Experience</h1>
            <Experience
                title="Junior Software Engineer"
                company="Zverse/Revaly"
                start={{ month: "October", year: 2021 }}
                end={{ month: "March", year: 2023 }}
                activities={[
                    "Assisted building Revaly, a real-time multiplayer 3D design review web app (comparable to Google Docs + Github + Miro for 3D)",
                    "Wrote frontend tests using Playwright and integrated them into the main repo as a Github workflow",
                    "Made dozens of React components using Typescript, MUI, CSS, Tailwind, Redux, and Apollo GraphQL",
                    "Used data structures and algorithms to optimize manipulating individual sections of complex models",
                    "Integrated permissions data with frontend, and wrote Supabase migration for PostgreSQL function to give accounts content control over hundreds of users",
                    "Built convenient wrapper functions for logging user interaction to Azure app-insights, simplifying tracking user workflow",
                    "Worked directly with the Director of UX to improve accessibility through aria labels, correct semantic tags, and mui-tooltips",
                ]}
            />
            <Experience
                title="Software Engineer Intern"
                company="co:census"
                start={{ month: "June", year: 2021 }}
                end={{ month: "September", year: 2021 }}
                activities={[
                    "Created chatbots with Twilio Studio",
                    "Automated creation of Twilio Flows using Go",
                    "Created custom JSON format to represent sms surveys",
                ]}
            />
            <Experience
                title="Composer"
                start={{ month: "June", year: 2011 }}
                end={{ month: "October", year: 2021 }}
                activities={[
                    "Composed stock music for Modus Operandi music library",
                    "Has pieces aired on Fox, CBS, NBC, and globally",
                ]}
            />
            <Experience
                title="Participant at the Recurse Center"
                company="Recurse Center"
                start={{ month: "July", year: 2020 }}
                end={{ month: "September", year: 2020 }}
                activities={[
                    "Learned JavaScript, HTML, and CSS independently",
                    "Learned abcjs music notation library to display sheet music in HTML",
                    "Created JavaScript classes to model pitches and chords and randomly generate notes",
                    "Created a music sight reading app",
                    "Created GameMaker text boxes with string parser to customize text appearance",
                    "Created movement code for 2D games using Bresenham's line llgorithm",
                    "Solved LeetCode questions in daily virtual pairing sessions with experienced devs",
                    "Led morning check-ins and MC'd weekly music listening group",
                    "Attended virtual programming lectures on machine learning, frontend web dev, and more",
                ]}
            />
            <Experience
                title="Piano Teacher"
                company="Hartland Music"
                start={{ month: "September", year: 2013 }}
                end={{ month: "June", year: 2018 }}
                activities={[
                    "Gave lessons to students aged 6 to 65",
                    "Organized studio events, recitals, and competition entrances",
                ]}
            />
            <Experience
                title="Programmer"
                company="Zerrez Solutions"
                start={{ month: "November", year: 2014 }}
                end={{ month: "July", year: 2015 }}
                activities={[
                    "Assisted in building a 2D modeling application in JavaScript and C++/QT",
                ]}
            />
            <h4 style={noBottom}>Associate in Science, Computer Science</h4>
            <h5 style={smallTop}>Monroe Community College, June 2020</h5>
            <h4 style={noBottom}>Bachelor of Music, Piano Performance</h4>
            <h5 style={smallTop}>Lawrence University, June 2013</h5>
        </article>
    );
};
 
export default About;
