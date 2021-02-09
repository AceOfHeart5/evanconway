import './App.css';
import Navbar from './Navbar.js';
import Blog from './Blog.js';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

	/* 
	We followed the information at this link to add firebase to this app:
	https://dev.to/farazamiruddin/react-firebase-add-firebase-to-a-react-app-4nc9
	We add firebase to the project simply by installing it in the cl. We setup 
	config values in the index.js file.
	*/

	// this is componentDidMount()
	useEffect(() => {
		//firebase.storage().ref("Shocked Pikachu.jpg").getDownloadURL()
		//	.then(e => setPika(e));
		//console.log(JSON.stringify(firebase.apps[0].options, null, 2));
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<div className="topbar">
					<h1 className="my-name">Evan Conway</h1>
					<Navbar/>
				</div>
				<div className="contentwrapper">
					<div className="contentborder">
						<Switch>
							<Route path="/projects">Literally nothing here yet.</Route>
							<Route path="/about">The about page.</Route>
							<Route path="/blog"><Blog/></Route>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
