import './App.css';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Content from './components/Content.js';
import { Container, Stack, Typography } from "@mui/material";

const App = () => {
	return (
		<HashRouter>
			<Container>
				<Stack direction="row" justifyContent="space-between" alignItems="center">
					<Typography variant="h2">Evan Conway</Typography>
					<Navbar/>
				</Stack>
				<Content/>
			</Container>
		</HashRouter>
	);
};

export default App;
