import { Stack } from '@mui/material';
import githubLogo from '../assets/github/github-mark.svg';
import Navlink from './Navlink.tsx';
import { Link } from '@mui/material';

const Navbar = () => {
    return <Stack direction="row">
        <Navlink link="">Home</Navlink>
        <Navlink link="projects">Projects</Navlink>
        <Link href="https://github.com/AceOfHeart5">
            <img alt="GitHub Logo" style={{ width: "32px", height: "32px" }} src={githubLogo}/>
        </Link>
    </Stack>;
}

export default Navbar;
