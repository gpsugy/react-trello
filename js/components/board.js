var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

function Board(props) {
	return (
		<div>
			<div>{props.title}</div>
			<div>
				{props.list}
			</div>
		</div>
	);
};

module.exports = Board;