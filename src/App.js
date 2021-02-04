import './App.css';
import Navbar from './Navbar.js';
import React, { useState } from 'react';

/*
It's probably foolish to make our own routing system. 
But who cares, I'm having fun.
*/
const getContent = (name) => {
	if (name === "about") return (
		<div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quos, quaerat, asperiores voluptate praesentium explicabo velit expedita dolorum dolore quisquam libero veritatis repellat? Nemo officiis natus laboriosam, ut magnam iste.</div>
	);
	return (
		<h1>There is no content with name "{name}" :(</h1>
	);
}

function App() {
	const [content, setContent] = useState("none");
	return (
		<div className="App">
			<div className="topbar">
				<h1 className="my-name">Evan Conway</h1>
				<Navbar contentChoice={content} contentSetter={setContent}/>
			</div>
			{getContent(content)}
		</div>
	);
}

export default App;
