import {
  Grid,
  Card,
  CardContent,
  Link,
  ImageList,
  ImageListItem,
  CardHeader,
  CardActions,
} from "@mui/material";
import Markdown from "./Markdown";

interface ProjectProps {
  title: string;
  linkGithub?: string;
  linkProject?: string;
  images?: { imageLink: string; altText: string }[];
  markdownDescription: string;
}

const Project = ({
  title,
  linkGithub,
  linkProject,
  images = [],
  markdownDescription,
}: ProjectProps) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardHeader title={title} />
        <CardContent>
          <Markdown>{markdownDescription}</Markdown>
          <ImageList>
            {images.map((img, i) => (
              <ImageListItem key={i}>
                <img src={img.imageLink} alt={img.altText} />
              </ImageListItem>
            ))}
          </ImageList>
        </CardContent>
        <CardActions sx={{ marginTop: "auto" }}>
          {linkGithub ? <Link href={linkGithub}>Github</Link> : null}
          {linkProject ? <Link href={linkProject}>View</Link> : null}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Project;
