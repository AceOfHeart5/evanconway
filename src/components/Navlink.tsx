import { Link, useLocation } from 'react-router-dom';
import { Link as MuiLink } from "@mui/material";

interface NavlinkProps {
    link: string,
    children: React.JSX.Element | React.JSX.Element[] | string,
}

const Navlink = ({ link, children }: NavlinkProps) => {
    const location = useLocation();

    const selected = location.pathname === ("/" + link);

    return ( 
        <MuiLink component={Link} to={"/" + link}>{children}</MuiLink>
        // <Link to={"/" + link} style={{
        //     cursor: "pointer",
        //     padding: "2px",
        //     margin: "5px",
        //     textDecoration: "none",            
        //     borderBottom:`2px solid ${selected ? "white" : "transparent"}`,
        // }}>
        //     {children}
        // </Link>
    );
}
 
export default Navlink;
