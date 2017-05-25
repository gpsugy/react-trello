var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');
var Card = require('./card');

class ListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			title: props.title
		};

		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}

	onAddInputChanged(event) {
		this.setState({value: event.target.value});

		console.log(`Input for LIST: ${this.state.title} changed to: ${event.target.value}`);
	}

	onAddSubmit(event) {
		console.log(`Input for LIST: ${this.state.title} has been submitted.`);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				hi
			</div>
			// {this.props.lists.map((list) =>
			// 	<List key={list.title} title={list.title} cards={list.cards} />
			// )}
		);	
	}
};

module.exports = ListContainer;

