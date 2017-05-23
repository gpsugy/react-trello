require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var Board = require('./components/board');

const directory = {
	title: "Shinobi Directory",
	lists: [
		{
			title: "Uzumaki Naruto",
			content: "Class-S Hokage of Konoha"
		},
		{
			title: "Uchiha Sasuke",
			content: "Class-SS Rogue Ninja of Konoha"
		},
		{
			title: "Haruno Sakura",
			content: "Class-S Medical Ninja of Konoha"
		}
	]
}

const element = (
	<Board title="Shinobi Directory" lists={listTitle}/>
);

ReactDOM.render(
	element,
	document.getElementById('root')
);
