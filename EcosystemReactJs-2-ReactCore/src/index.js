import React from 'react';
import { render } from 'react-dom';

function testUrl() {
	const Avatar = (props) => (
		console.log(props),
		<div>
			This is an avatar: { props.url }
		</div>
	);
	const Header = (props) => (
		console.log(props),
		<div>
			new messages: { props.unreadMessages }
			<br/>
			Its Header: { props.url }
			<Avatar url={ props.url } />
		</div>
	);

	render(
		<div>
			<Header url="nameTest" unreadMessages="2" />
		</div>,
		document.getElementById('root')
	);
}
testUrl();
