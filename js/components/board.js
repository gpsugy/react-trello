var React = require('react');
var ReactDOM = require('react-dom');

var ListContainer = require('./list-container');

function Board(props) {
	return (
		<div>
			<h1>Your Board: {props.title}</h1>
			{props.lists.map((list) =>
				<ListContainer key={list.title} title={list.title} cards={list.cards} />
			)}
		</div>
	);
};

module.exports = Board;