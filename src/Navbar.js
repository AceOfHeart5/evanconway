const Navbar = ({contentChoice, contentSetter}) => {

    const getSelected = (name) => {
        if (contentChoice === name) return "selected";
        return "";
    }

    return ( 
        <div className="navbar">
            <div className={`nav blog ${getSelected("blog")}`} onClick={() => contentSetter("blog")}>
                Blog
            </div>
            <div className={`nav projects ${getSelected("projects")}`} onClick={() => contentSetter("projects")}>
                Projects
            </div>
            <div className={`nav about ${getSelected("about")}`} onClick={() => contentSetter("about")}>
                About
            </div>
        </div>
     );
}
 
export default Navbar;
