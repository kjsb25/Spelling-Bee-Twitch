import React from 'react';
import Hive from "./Hive"
import '../css/HiveInput.scss';
import { shuffleLetters } from "../helpers";

class HiveInput extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {	userInput: '',
	    				mainLetter: this.props.mainLetter,
					  	otherLetters: this.props.otherLetters
					  };

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.shuffleHive = this.shuffleHive.bind(this);
	}

	handleChange(event) {
	  this.setState({userInput: event.target.value});
	}

	handleSubmit(event) {
	  alert('A name was submitted: ' + this.state.userInput);
	  event.preventDefault();
	}

	shuffleHive() {
		console.log(this.state.otherLetters);
	  var newLetters=shuffleLetters(this.state.otherLetters);
	  this.setState({otherLetters: newLetters});
	}

	render() {
		return (
			<div className="hiveInput">
				<Hive mainLetter={this.state.mainLetter} otherLetters={this.state.otherLetters} />
		      	<div className="buttons">
					<button className="delete">Delete</button>
					<button className="Shuffle" onClick={this.shuffleHive}>Shuffle</button>
					<button className="Enter">enter</button>
				</div>
			</div>
    	);
   }
}

export default HiveInput;
