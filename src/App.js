import './App.css';
import Navbar from './Navbar.js';
import Blog from './Blog.js';
import React, { useState, useEffect } from 'react';

/*
It's probably foolish to make our own routing system. 
But who cares, I'm having fun.
*/
const getContent = (name) => {
	if (name === "about") return (
		<div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quos, quaerat, asperiores voluptate praesentium explicabo velit expedita dolorum dolore quisquam libero veritatis repellat? Nemo officiis natus laboriosam, ut magnam iste.</div>
	);
	if (name === "projects") return (
		<h1>I'll list my projects later.</h1>
	);
	if (name === "blog") return (<Blog/>);
	if (name.startsWith("changing")) return (
		<div></div>
	);
	return (
		<h1>There is no content with name "{name}" :(</h1>
	)
}

function App() {

	// content setter
	const [content, setContent] = useState("none");

	// set content wrapper
	const setContentWrapper = (name) => {
		setContent(`changing ${name}`);
	}

	useEffect(() => {
		const newContent = content.split(" ");
		if (newContent[0] === "changing") setContent(newContent[1]);
	}, [content]);

	return (
		<div className="App">
			<div className="topbar">
				<h1 className="my-name">Evan Conway</h1>
				<Navbar contentChoice={content} contentSetter={setContentWrapper}/>
			</div>
			<div className="contentwrapper">
				<div className="contentborder" contentType={content}>
					{getContent(content)}
				</div>
			</div>
		</div>
	);
}

export default App;
