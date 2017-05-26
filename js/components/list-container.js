var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

class ListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: props.cards,
			text: ''
		};

		this.onAddInputChange = this.onAddInputChange.bind(this);
		this.onSubmitForm = this.onSubmitForm.bind(this);
	}

	onAddInputChange(cardText) {
		this.setState({text: cardText});
	}

	onSubmitForm() {
		this.setState({
			// ALWAYS use setState and NEVER directly modify state. concat returns a new array
			cards: this.state.cards.concat(this.state.text),
			text: ''
		});
	}

	render() {
		return (
			<div>
				<List title={this.props.title} cards={this.state.cards} inputText={this.state.text}
					onAddInputChange={this.onAddInputChange} onSubmitForm={this.onSubmitForm}/>
			</div>
		);	
	}
};

module.exports = ListContainer;

