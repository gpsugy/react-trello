var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

export class List extends React.Component {
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
				<div>List Title: {this.props.title}</div>
				<Card cards={this.props.cards} />
				<form onSubmit={this.onAddSubmit}>
					<input type="text" value={this.state.value} onChange={this.onAddInputChanged} />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);	
	}
};

module.exports = List;

