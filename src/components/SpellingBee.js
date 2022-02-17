import React from 'react';
import HiveInput from "./HiveInput";
import SBStatus from "./SBStatus";
import '../css/SpellingBee.scss';


class SpellingBee extends React.Component {
	render(){
		return(
			<React.Fragment>
				<HiveInput mainLetter={this.props.mainLetter} otherLetters={this.props.otherLetters} />
				<SBStatus />
			</React.Fragment>
		)
	} 
}

export default SpellingBee;
