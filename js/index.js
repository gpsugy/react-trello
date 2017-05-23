require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var Board = require('./components/board');

var listTitle = ["Uzumaki Naruto", "Uchiha Sasuke", "Haruno Sakura"];

const element = (
	<Board title="Shinobi Directory" lists={listTitle}/>
);

ReactDOM.render(
	element,
	document.getElementById('root')
);
