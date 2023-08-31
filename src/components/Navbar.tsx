import githubLogo from '../assets/github/github-mark-white.png';
import Navlink from './Navlink.js';

const Navbar = () => {
    return <div style={{
        display: "flex",
        alignItems: "center",
    }}>
        <Navlink link="">Home</Navlink>
        <Navlink link="projects">Projects</Navlink>
        <a style={{ width: "32px", height: "32px", }} href="https://github.com/AceOfHeart5">
            <img alt="GitHub Logo" src={githubLogo}/>
        </a>
    </div>;
}

export default Navbar;
