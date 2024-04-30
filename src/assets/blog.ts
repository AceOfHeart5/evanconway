interface BlogPost {
  title: string;
  date: Date;
  description: string;
  contentPath: string;
}

const getContentPath = (fileName: string) =>
  `/src/assets/blog_posts/${fileName}.md`;

const BLOG: BlogPost[] = [
  {
    title: "Cool Blog Post",
    date: new Date(2023, 9, 23),
    description: "Cool stuff from a cool person",
    contentPath: getContentPath("CoolBlogPost"),
  },
  {
    title: "Interesting Topic",
    date: new Date(2023, 9, 24),
    description: "Some super interesting stuff.",
    contentPath: getContentPath("InterestingTopic"),
  },
  {
    title: "Reflective Musings",
    date: new Date(2023, 9, 25),
    description: "Relfections and musings about life.",
    contentPath: getContentPath("ReflectiveMusings"),
  },
];

export default BLOG;
