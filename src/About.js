const About = () => {
    const noBottom = { marginBottom: "0px"};
    const smallTop = { marginTop: "5px"};
    return (
        <article style={{ maxWidth: "900px" }}>
            <p style={{paddingBottom: "10px", borderColor: "grey", borderBottomStyle: "solid"}}>
                Evan Conway is a composer and programmer based in Rochester, NY. He writes for the Modus Operandi Music library and has been pursuing 
                programming professionally for the last 2 and a half years. In his spare times he writes games with Game Maker Studio 2.
            </p>
            <h1>Experience</h1>
            <h4 style={noBottom}>Composer</h4>
            <h5 style={smallTop}>June 2011 to Present</h5>
            <ul>
                <li>Composes stock music for Modus Operandi Music Library</li>
                <li>Pieces aired on Fox, CBS, NBC, and globally.</li>
            </ul>
            <h4 style={noBottom}>Participant at the Recurse Center</h4>
            <h5 style={smallTop}>July 2020 to September 2020</h5>
            <ul>
                <li>Learned JavaScript, HTML, and CSS independently.</li>
                <li>Learned ABCjs music notation library to display sheet music in HTML.</li>
                <li>Created JavaScript classes to model pitches, chords, and randomly generate notes.</li>
                <li>Created Music Sight Reading App</li>
                <li>Created decorative text boxes with string parser to customize appearance.</li>
                <li>Created movement code for 2D games using Bresenham's Line Algorithm.</li>
                <li>Solved LeetCode questions in daily virtual pairing sessions with experienced devs.</li>
                <li>Led morning check-ins and MC'd weekly music listening group.</li>
                <li>Attended virtual programming lectures on machine learning, frontend web dev, and more.</li>
            </ul>
            <h4 style={noBottom}>Piano Teacher</h4>
            <h5 style={smallTop}>Hartland Music, September 2013 to June 2018</h5>
            <ul>
                <li>Gave lessons to students aged 6 to 65.</li>
                <li>Organized studio, recitals, and competition entrances.</li>
            </ul>
            <h4 style={noBottom}>Programmer</h4>
            <h5 style={smallTop}>Zerrez Solutions, November 2014 to July 2015</h5>
            <ul>
                <li>Assisted in building a 2D modeling application in JavaScript and C++/QT</li>
            </ul>
            <h4 style={noBottom}>Associate's in Computer Science</h4>
            <h5 style={smallTop}>Monroe Community College, June 2020</h5>
            <h4 style={noBottom}>Bachelor's of Music in Piano Performance</h4>
            <h5 style={smallTop}>Lawrence University, June 2013</h5>
        </article>
    );
}
 
export default About;
