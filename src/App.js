import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.js';
import Projects from './Projects';
import Blog from './Blog.js';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="topbar">
					<h1> 
						<Link className="my-name" to="/">
							Evan Conway
						</Link>
					</h1>
					<Navbar/>
				</div>
				<div className="contentwrapper">
					<div className="contentborder">
						<Switch>
							<Route path="/projects"><Projects/></Route>
							<Route path="/about">The about page.</Route>
							<Route path="/blog"><Blog/></Route>
							<Route path="/">
								Home page with no content lol.
							</Route>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
