import './App.css';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Content from './components/Content.js';

const App = () => {
	return <div className="App" style={{
		color: "white",
		display: "flex",
		justifyContent: "center",
		padding: "24px",
	}}>
		<div style={{ maxWidth: "1200px"}}>
			<HashRouter>
				<div style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
					<h1 style={{ cursor: "default", padding: " 0 0 24px 0", margin: 0 }}>Evan Conway</h1>
					<Navbar/>
				</div>
				<div style={{
					margin: "0px",
					padding: "0px 20px",
					border: "2px solid grey",
				}}>
					<Content/>
				</div>
			</HashRouter>
		</div>
	</div>;
};

export default App;
