import './App.css';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Content from './components/Content.js';
import { Container, Stack, Typography, createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const App = () => {
	const theme = createTheme({
		components: {
			MuiStack: {
				defaultProps: {
					spacing: 1,
				},
			},
			MuiButton: {
				defaultProps: {
					variant: "outlined",
				}
			}
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<HashRouter>
				<CssBaseline/>
				<Container>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						paddingBottom={1}
						borderBottom={1}
						borderColor={"divider"}
						marginBottom={2}
					>
						<Typography variant="h2">Evan Conway</Typography>
						<Navbar/>
					</Stack>
					<Content/>
				</Container>
			</HashRouter>
		</ThemeProvider>
	);
};

export default App;
