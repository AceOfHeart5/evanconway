import { useLocation } from "react-router";
import About from "./pages/About";
import Projects from "./pages/Projects";

const Content = () => {
    const location = useLocation();

    if (location.pathname === "/") return <About/>;
    if (location.pathname === "/projects") return <Projects/>;

    return <div>{`unknown route :(`}</div>
};

export default Content;
