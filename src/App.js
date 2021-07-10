import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Generator from './components/Generator'
import Consumer from './components/Consumer'
import Welcome from './components/Welcome'

function App() {
	return (
		<div className="main-div">
			<BrowserRouter>
			<Nav />
				<Route path="/" exact component={Welcome}></Route>
				<Route path="/generator/" exact component={Generator}></Route>
				<Route path="/generator/:pollId" component={Generator}></Route>
				<Route path="/consumer/:pollId" component={Consumer}></Route>
			</BrowserRouter>
		</div>
	)
}

export default App;
