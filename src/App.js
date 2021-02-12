import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.js';
import Projects from './Projects';
import Blog from './Blog.js';
import About from './About.js';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="topbar">
					<h1 className="my-name"> 
						Evan Conway
						{/*<Link className="my-name" to="/">
							Evan Conway
						</Link>*/}
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
			</BrowserRouter>
		</div>
	);
}

export default App;
