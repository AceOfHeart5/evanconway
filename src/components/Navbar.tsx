import Navlink from './Navlink.js';

const Navbar = () => {
    return <div className="navbar">
            <Navlink link="">About</Navlink>
            <Navlink link="projects">Projects</Navlink>
        </div>;
}

export default Navbar;
