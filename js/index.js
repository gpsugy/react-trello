require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var Board = require('./components/board');

var listTitle = ["Uzumaki Naruto", "Uchiha Sasuke", "Haruno Sakura"];

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<Board title="Shinobi Directory" lists={listTitle}/>, document.getElementById('app'));
});