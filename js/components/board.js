var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

function Board(props) {
	return (
		<div>
			<div>Board Title: {props.title}</div>
			{props.lists.map((list) =>
				<List key={list.title} title={list.title} cards={list.cards} />
			)}
		</div>
	);
};

module.exports = Board;