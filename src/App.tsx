import './App.css';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Content from './components/Content.js';

const App = () => {
	return <div className="App">
		<HashRouter>
			<div className="topbar">
				<h1 className="my-name"> 
					Evan Conway
				</h1>
				<Navbar/>
			</div>
			<div className="contentwrapper">
				<div className="contentborder">
					<Content/>
				</div>
			</div>
		</HashRouter>
	</div>;
};

export default App;
