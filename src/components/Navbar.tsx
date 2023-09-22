import { useNavigate } from 'react-router-dom';
import githubLogo from '../assets/github/github-mark.svg';
import { Link, Button, Stack } from '@mui/material';

const Navbar = () => {
    const navigate = useNavigate();

    const setPage = (page: string) => {
        navigate(page, { replace: true });
    };

    return <Stack direction="row" alignItems={"center"}>
        <Button onClick={() => setPage("")}>Home</Button>
        <Button onClick={() => setPage("projects")}>Projects</Button>
        <Link href="https://github.com/AceOfHeart5">
            <img alt="GitHub Logo" style={{ width: "32px", height: "32px" }} src={githubLogo}/>
        </Link>
    </Stack>;
}

export default Navbar;
