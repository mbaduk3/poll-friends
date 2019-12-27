import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Generator from './components/Generator'
import json_data from './testform.json'

function App() {
	console.log(json_data);
	return (
		<div class="main-div">
			<Nav />
			<Generator data={json_data}/>
		</div>
	)
}

export default App;
