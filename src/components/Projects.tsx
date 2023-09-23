import { Container, Grid } from '@mui/material';
import Project from './Project.js';
import PROJECTS from '../assets/projects.js';

const Projects = () => {
    return <Container>
        <Grid container spacing={3} justifyContent={"center"}>
            { PROJECTS.map(p => <Project
                key={p.title}
                title={p.title}
                linkGithub={p.linkGithub}
                linkProject={p.linkProject}
                images={p.images}
                markdownDescription={p.markdownDescription}
            />) }
        </Grid>
    </Container>;
}

export default Projects;
