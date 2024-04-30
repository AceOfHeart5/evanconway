import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import BLOG from "../assets/blog";
import MarkdownPage from "./MarkdownPage";

const BlogList = () => {
  const [_, setSearchParams] = useSearchParams();

  if (BLOG.length === 0)
    return <Typography>No posts yet. Check back soon!</Typography>;

  return (
    <Stack>
      {BLOG.map((post, i) => (
        <Card key={i}>
          <CardActionArea
            onClick={() =>
              setSearchParams({ postid: String(post.date.getTime()) })
            }
          >
            <CardContent>
              <Typography variant="h6" color={"primary"}>
                {post.title}
              </Typography>
              <Typography>{post.date.toLocaleDateString()}</Typography>
              <Typography>{post.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Stack>
  );
};

const Post = ({ postId }: { postId: string }) => {
  const navigate = useNavigate();

  const post = BLOG.find((p) => String(p.date.getTime()) === postId);
  if (post === undefined)
    return <Typography>{"Blog post not found :("}</Typography>;

  return (
    <>
      <Button onClick={() => navigate("/blog", { replace: true })}>
        {"< Back"}
      </Button>
      <MarkdownPage contentPath={post.contentPath} />
    </>
  );
};

const Blog = () => {
  const [searchParams] = useSearchParams();

  const postId = searchParams.get("postid");

  return postId === null ? <BlogList /> : <Post postId={postId} />;
};

export default Blog;
