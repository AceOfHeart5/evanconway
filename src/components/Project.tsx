import { useState, useEffect } from "react";
import Markdown from 'markdown-to-jsx';
import { Grid, Card, CardContent, Typography, Stack, Link, ImageList, ImageListItem } from '@mui/material';

interface ProjectProps {
    title: string,
    linkGithub?: string,
    linkProject?: string,
    images?: { imageLink: string, altText: string }[],
    markdownFileName?: string,
}

const Project = ({ title, linkGithub, linkProject, images, markdownFileName }: ProjectProps) => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        const setupMarkdown = async () => {
            const res = await fetch(`src/content/projects/${markdownFileName}.md`);
            const text = await res.text();
            setMarkdown(text);
        };
        setupMarkdown();
    }, [markdownFileName]);

    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ height: "100%" }}>
                <CardContent>
                    <Typography variant='h4'>{title}</Typography>
                    <Stack direction="row">
                        { linkGithub ? <Link href={linkGithub}>Github</Link> : null }
                        { linkProject ? <Link href={linkProject}>Project</Link> : null }
                    </Stack>
                    { images === undefined ? null : <ImageList>
                        {images.map((img, i) => <ImageListItem key={i}>
                            <img src={img.imageLink} alt={img.altText}/>
                        </ImageListItem>)}
                    </ImageList> }
                    <Markdown>{markdown}</Markdown>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Project;
