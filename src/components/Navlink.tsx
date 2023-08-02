import { Link } from 'react-router-dom';

const Navlink = ({ link, children, selected }) => {

    const getSelected = () => {
        if (link === selected) return "selected";
        return null;
    }

    return ( 
        <Link className={`nav ${getSelected()}`} to={"/" + link}>
            {children}
        </Link>
    );
}
 
export default Navlink;
