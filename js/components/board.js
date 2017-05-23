var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

function Board(props) {
	return (
		<div>
			<div>Board Title: {props.title}</div>
			<List title={props.lists[0].title} cards={props.lists[0].cards} />
			<List title={props.lists[1].title} cards={props.lists[1].cards} />
			<List title={props.lists[2].title} cards={props.lists[2].cards} />
		</div>
	);
};

module.exports = Board;