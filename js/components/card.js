var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {
	return (
		<div className="card">
			<div>{props.content}</div>
		</div>
	);
};

module.exports = Card;