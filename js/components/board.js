var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

function buildBoard(lists) {
	return lists.map((list) =>
		<List title={list.title} cards={list.cards} />
	);
}

function Board(props) {
	return (
		<div>
			<div>Board Title: {props.title}</div>
			{buildBoard(props.lists)}
		</div>
	);
};

module.exports = Board;