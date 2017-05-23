var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var List = function(props) {
	// var listOfThings = props.lists.map(list => {
	// 	return (
	// 		<Card 
	// 			content={list}
	// 		/>
	// 	)
	// })

	return (
		<div>
			<div>{props.title}</div>
			{listOfThings}
		</div>
	);
};

module.exports = List;