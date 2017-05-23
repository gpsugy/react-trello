var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

function List(props) {
	return (
		<div>
			<div>List Title: {props.title}</div>
			<Card cards={props.cards} />
		</div>
	);
};

module.exports = List;