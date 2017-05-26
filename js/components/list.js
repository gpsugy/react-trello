var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

class List extends React.Component {
	constructor(props) {
		super(props);

		this.handleAddInput = this.handleAddInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleAddInput(e) {
		this.props.onAddInputChange(e.target.value);
	}

	handleSubmit(e) {
		console.log(e.target.value);
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<h3>List: {this.props.title}</h3>
				<Card cards={this.props.cards} />
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.props.inputText} onChange={this.handleAddInput} />
					<input type="submit" value="Add Card" />
				</form>
			</div>
		);	
	}
};

module.exports = List;

