import { useLocation } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const Content = () => {
    const location = useLocation();

    if (location.pathname === "/") return <Home/>;
    if (location.pathname === "/projects") return <Projects/>;

    return <div>{`unknown route :(`}</div>
};

export default Content;
