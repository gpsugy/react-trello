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

		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}

	onAddInputChanged(e) {
		this.setState({value: e.target.value});
	}

	onAddSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<List title={this.props.title} cards={this.state.cards} inputText={this.state.text}/>
			</div>
		);	
	}
};

module.exports = ListContainer;

