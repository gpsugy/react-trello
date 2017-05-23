require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var Board = require('./components/board');

const directory = {
	title: "Shinobi Directory",
	lists: [
		{
			title: "Uzumaki Naruto",
			cards: {
				text: "Class-S Hokage of Konoha"
			}
		},
		{
			title: "Uchiha Sasuke",
			cards: {
				text: "Class-SS Rogue Ninja of Konoha"
			}
		},
		{
			title: "Haruno Sakura",
			cards: {
				text: "Class-S Medical Ninja of Konoha"
			}
		}
	]
};

const element = (
	<Board title={directory.title} lists={directory.lists}/>
);

ReactDOM.render(
	element,
	document.getElementById('root')
);
