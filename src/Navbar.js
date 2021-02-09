import { useState, useEffect } from 'react';
import Navlink from './Navlink.js';
import { useHistory } from 'react-router-dom';

const Navbar = () => {

    const [selected, setSelected] = useState();

    /* I stole this code from online, so I'm going to try and explain it as best
    I can. This effect appears to log a listener function into the history object. 
    I believe the history object is some sort of automated thing that detects when
    the url or "location" changes. The function passed to the listener is run 
    anytime location changes value. */
    const history = useHistory();
    useEffect(() => {
        return history.listen((location) => {
            // we use index 1 here because an empty string is the first value for some reason
            setSelected(location.pathname.split('/')[1]);
        })
    }, [history]) 

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
            <Navlink link="blog" selected={selected}>Blog</Navlink>
            <Navlink link="projects" selected={selected}>Projects</Navlink>
            <Navlink link="about" selected={selected}>About</Navlink>
        </div>
     );
}

export default Navbar;
