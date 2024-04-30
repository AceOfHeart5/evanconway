import Navbar from "./components/Navbar.js";
import {
  Container,
  Stack,
  Typography,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { Outlet } from "react-router-dom";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#222",
      },
    },
    components: {
      MuiStack: {
        defaultProps: {
          spacing: 1,
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "text",
        },
      },
      MuiCard: {
        defaultProps: {
          variant: "elevation",
          elevation: 5,
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          marginBottom={2}
        >
          <Typography variant="h2">Evan Conway</Typography>
          <Navbar />
        </Stack>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default App;
