import { Link, useLocation } from 'react-router-dom';

interface NavlinkProps {
    link: string,
    children: React.JSX.Element | React.JSX.Element[] | string,
}

const Navlink = ({ link, children }: NavlinkProps) => {
    const location = useLocation();

    const getSelected = () => {
        if (location.pathname === ("/" + link)) return "selected";
        return null;
    }

    return ( 
        <Link className={`nav ${getSelected()}`} to={"/" + link}>
            {children}
        </Link>
    );
}
 
export default Navlink;
