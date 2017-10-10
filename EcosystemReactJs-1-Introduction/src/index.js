import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';

// ReactDOM.render(
render(
	<div>
		Hello, react!
	</div>,
	document.getElementById('root')
);



function tick() {
	const element = (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	render(
		element,
		document.getElementById('root2')
	);
}

setInterval(tick, 1000);