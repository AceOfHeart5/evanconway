import './App.css';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Content from './components/Content.js';

const App = () => {
	return <div className="App">
		<HashRouter>
			<div className="topbar">
				<h1 style={{ cursor: "default" }}> 
					Evan Conway
				</h1>
				<Navbar/>
			</div>
			<div style={{
				margin: "0px",
				padding: "20px",
			}}>
				<div style={{
					margin: "0px",
					padding: "0px 20px",
					border: "2px solid grey",
				}}>
					<Content/>
				</div>
			</div>
		</HashRouter>
	</div>;
};

export default App;
