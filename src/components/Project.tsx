import { Paper, Typography, Stack, Link } from '@mui/material';

interface ProjectProps {
    title: string,
    linkGithub?: string,
    linkProject?: string,
    images?: { imageLink: string, altText: string }[],
    description?: string,
    children?: React.JSX.Element | React.JSX.Element[],
}

const Project = ({ title, linkGithub, linkProject, images, description, children }: ProjectProps) => {
    return (
        <Paper>
            <Typography variant='h4'>{title}</Typography>
            <Stack direction="row">
                { linkGithub ? <Link href={linkGithub}>Github</Link> : null }
                { linkProject ? <Link href={linkProject}>Project</Link> : null }
            </Stack>
            <Stack>
                {images?.map(img => <img src={img.imageLink} alt={img.altText} style={{ maxWidth: "100%" }}/>)}
            </Stack>
            { description ? <Typography>{description}</Typography> : null }
            {children}
        </Paper>
    );
};

export default Project;
