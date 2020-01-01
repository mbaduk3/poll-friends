import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Generator from './components/Generator'
import json_data from './testform.json'

function App() {
	return (
		<div className="main-div">
			<Nav />
			<Generator data={json_data}/>
		</div>
	)
}

export default App;
