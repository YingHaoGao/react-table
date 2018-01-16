import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Screen from './screen';

ReactDOM.render(
	<div>
		<Screen/>
		<App />
	</div>
	, document.getElementById('app')
);