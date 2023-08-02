import { useLocation } from "react-router";
import About from "./About";
import Projects from "./Projects";

const Content = () => {
    const location = useLocation();

    if (location.pathname === "/") return <About/>;
    if (location.pathname === "/projects") return <Projects/>;

    return <div>{`unknown route :(`}</div>
};

export default Content;
