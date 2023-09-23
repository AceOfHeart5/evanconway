import { useLocation } from "react-router";
import Projects from "./Projects";
import homeContent from "../assets/home.md";
import MarkdownPage from "./MarkdownPage";
import Blog from "./Blog";

const Content = () => {
    const location = useLocation();

    if (location.pathname === "/") return <MarkdownPage contentPath={homeContent}/>
    if (location.pathname === "/blog") return <Blog/>;
    if (location.pathname === "/projects") return <Projects/>;

    return <div>{`unknown route :(`}</div>
};

export default Content;
