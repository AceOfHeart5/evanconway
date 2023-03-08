import './App.css';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.js';
import Projects from './Projects';
import Blog from './Blog.js';
import About from './About.js';

function App() {
	return (
		<div className="App">
			<HashRouter basename="/">
				<div className="topbar">
					<h1 className="my-name"> 
						Evan Conway
					</h1>
					<Navbar/>
				</div>
				<div className="contentwrapper">
					<div className="contentborder">
						<Switch>
							<Route path="/projects"><Projects/></Route>
							<Route path="/blog"><Blog/></Route>
							<Route path="/"><About/></Route>
						</Switch>
					</div>
				</div>
			</HashRouter>
		</div>
	);
}

export default App;
