// Filename - App.js

// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	// usestate for setting a javascript
	// object for storing and using data
	const [status, setstatus] = useState();

	// Using useEffect for single rendering
	useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		fetch("/status").then((res) =>
			res.json().then((status) => {
				// Setting a data from api
				setstatus(status);
			})
		);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>React and flask</h1>
				{/* Displaying data */}
				<p>{status}</p>
			</header>
		</div>
	);
}

export default App;
