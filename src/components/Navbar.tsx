import { useNavigate } from "react-router-dom";
import { Button, Stack, IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();

  const setPage = (page: string) => {
    navigate(page, { replace: true });
  };

  return (
    <Stack direction="row" alignItems={"center"}>
      <Button onClick={() => setPage("")}>Home</Button>
      {/* <Button onClick={() => setPage("blog")}>Blog</Button> */}
      <Button onClick={() => setPage("projects")}>Projects</Button>
      <IconButton color="primary" href="https://github.com/evanconway">
        <GitHub fontSize="large" />
      </IconButton>
    </Stack>
  );
};

export default Navbar;
