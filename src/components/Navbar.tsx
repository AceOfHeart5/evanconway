import Navlink from './Navlink.js';

const Navbar = () => {
    return <div className="" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        alignItems: "center",
        justifyItems: "center",
    }}>
        <Navlink link="">About</Navlink>
        <Navlink link="projects">Projects</Navlink>
    </div>;
}

export default Navbar;
