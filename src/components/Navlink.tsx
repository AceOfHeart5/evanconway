import { Link, useLocation } from 'react-router-dom';

interface NavlinkProps {
    link: string,
    children: React.JSX.Element | React.JSX.Element[] | string,
}

const Navlink = ({ link, children }: NavlinkProps) => {
    const location = useLocation();

    const selected = location.pathname === ("/" + link);

    return ( 
        <Link to={"/" + link} style={{
            cursor: "pointer",
            padding: "2px",
            margin: "5px",
            textDecoration: "none",            
            borderBottom:`2px solid ${selected ? "white" : "transparent"}`,
        }}>
            {children}
        </Link>
    );
}
 
export default Navlink;
