import { Typography, Link, Container } from "@mui/material";

const Home = () => {
    return (
        <Container>
            <Typography variant="h3">About Me</Typography>
            <Typography>
            I'm a programmer and composer based in Brooklyn NY. Whether it's a new library, an interesting VST, or game, I love learning new things. I spent 10 years in the music industry as a piano teacher and composer. And I've spent about 1.5 years programming professionally.  I value clean, readable code, and seeing a project done well. 
            </Typography>
            <Typography>
                If you'd like to know more check out my demo projects linked above!
            </Typography>
            <Typography>
                I'm currently job searching. If you're interested in contacting me, please reach out. I'd love to hear from you!
            </Typography>
            <Typography>evanconwaymusic@gmail.com</Typography>     
            <Link href="https://docs.google.com/document/d/1qRQ8ZiwPFS40rOGruCJJj6VH0nnWQdo6qOWGVO3WV4g/preview">Resume</Link>
        </Container>
    );
};

export default Home;
