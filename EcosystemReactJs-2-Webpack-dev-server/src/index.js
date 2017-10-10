import React from 'react';
import { render } from 'react-dom';

import Test from './test';
import Test2 from './test2';

render(
	<div>
		Hello, react!!!
		<Test />
		<Test2 />
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