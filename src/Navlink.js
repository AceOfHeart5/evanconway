import { Link } from 'react-router-dom';

const Navlink = ({link, children, choose}) => {

    const getSelected = () => {
        if (window.location.pathname.endsWith(link)) return "selected";
        return null;
    }

    return ( 
        <Link className={`nav ${getSelected()}`} to={link} onClick={() => choose(link)}>
            {children}
        </Link>
    );
}
 
export default Navlink;
