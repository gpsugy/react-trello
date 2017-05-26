var React = require('react');
var ReactDOM = require('react-dom');

function Card(props) {
	return (
		<div className="card">
			{props.cards.map((card) =>
				<h5 key={card}>{card}</h5>
			)}
		</div>
	);
};

module.exports = Card;