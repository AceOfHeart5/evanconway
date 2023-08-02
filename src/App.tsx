import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Projects from './components/Projects';
import Blog from './components/Blog.js';
import About from './components/About.js';

const App = () => {
	return <div className="App">
		<HashRouter basename="/">
			<div className="topbar">
				<h1 className="my-name"> 
					Evan Conway
				</h1>
				<Navbar/>
			</div>
			<div className="contentwrapper">
				<div className="contentborder">
					<Routes>
						<Route path="/projects"><Projects/></Route>
						<Route path="/blog"><Blog/></Route>
						<Route path="/"><About/></Route>
					</Routes>
				</div>
			</div>
		</HashRouter>
	</div>;
};

export default App;
