import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Content from './components/Content.js';
import { Container, Stack, Typography, createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const App = () => {
	const theme = createTheme({
		palette: {
			mode: "dark",
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
				}
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
			<HashRouter>
				<CssBaseline/>
				<Container>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
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
