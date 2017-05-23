var React = require('react');
var ReactDOM = require('react-dom');

function Card(props) {
	return (
		<div className="card">
			<div>Card Text: {props.cards.text}</div>
		</div>
	);
};

module.exports = Card;