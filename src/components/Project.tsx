import { Card, CardContent, Typography, Stack, Link, ImageList, ImageListItem } from '@mui/material';

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
        <Card><CardContent>
            <Typography variant='h4'>{title}</Typography>
            <Stack direction="row">
                { linkGithub ? <Link href={linkGithub}>Github</Link> : null }
                { linkProject ? <Link href={linkProject}>Project</Link> : null }
            </Stack>
            { images === undefined ? null : <ImageList>
                {images.map(img => <ImageListItem>
                    <img src={img.imageLink} alt={img.altText}/>
                </ImageListItem>)}
            </ImageList> }
            { description ? <Typography>{description}</Typography> : null }
            {children}
        </CardContent></Card>
    );
};

export default Project;
