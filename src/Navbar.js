import { useState, useEffect } from 'react';
import Navlink from './Navlink.js';

const Navbar = () => {

    const [selected, setSelected] = useState();

    /*
    This function runs whenever 'selected' is changed. It also re-renders the 
    component. And actually, that's the only reason this is here. I want the
    component to re-render when the user chooses a different option from the
    Navbar. There must be a more elegant way to do this, because right now this
    seems totally ridiculous.
    */
    useEffect(() => {}, [selected]);

    return ( 
        <div className="navbar">
            <Navlink link="blog" choose={setSelected}>Blog</Navlink>
            <Navlink link="projects" choose={setSelected}>Projects</Navlink>
            <Navlink link="about" choose={setSelected}>About</Navlink>
        </div>
     );
}

export default Navbar;
