import { useState, useEffect } from "react";
import Markdown from 'markdown-to-jsx';
import { Grid, Card, CardContent, Typography, Stack, Link, ImageList, ImageListItem } from '@mui/material';

interface ProjectProps {
    title: string,
    linkGithub?: string,
    linkProject?: string,
    images?: { imageLink: string, altText: string }[],
    markdownDescriptionPath?: string,
}

const Project = ({ title, linkGithub, linkProject, images=[], markdownDescriptionPath }: ProjectProps) => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        if (markdownDescriptionPath === undefined) return;
        const setupMarkdown = async () => {
            try {
                const res = await fetch(markdownDescriptionPath);
                const text = await res.text();
                setMarkdown(text);
            } catch (e) {
                console.log(`project markdown error: ${e}`);
            }
        };
        setupMarkdown();
    }, [markdownDescriptionPath]);

    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ height: "100%" }}>
                <CardContent>
                    <Typography variant='h5'>{title}</Typography>
                    <Markdown>{markdown}</Markdown>
                    <ImageList>
                        {images.map((img, i) => <ImageListItem key={i}>
                            <img src={img.imageLink} alt={img.altText}/>
                        </ImageListItem>)}
                    </ImageList>
                    <Stack direction="row">
                        { linkGithub ? <Link href={linkGithub}>Github</Link> : null }
                        { linkProject ? <Link href={linkProject}>View</Link> : null }
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Project;
