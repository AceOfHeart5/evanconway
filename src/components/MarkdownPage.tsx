import { useState, useEffect } from "react";
import Markdown from "./Markdown";

interface Props {
  contentPath: string;
}

const MarkdownPage = ({ contentPath }: Props) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const setupContent = async () => {
      const res = await fetch(contentPath);
      const text = await res.text();
      setMarkdown(text);
    };
    setupContent();
  }, [contentPath]);

  return <Markdown>{markdown}</Markdown>;
};

export default MarkdownPage;
