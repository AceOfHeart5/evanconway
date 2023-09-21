import { useState, useEffect } from "react";
import Markdown from 'markdown-to-jsx';
import content from "../../content/home.md";

const Home = () => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        const setupContent = async () => {
            const res = await fetch(content);
            const text = await res.text();
            setMarkdown(text);
        };
        setupContent();
    }, []);

    return <Markdown>{markdown}</Markdown>;
};

export default Home;
