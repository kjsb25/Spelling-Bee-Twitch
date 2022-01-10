import React from 'react';
import HiveInput from "./HiveInput"
import '../css/SpellingBee.scss';


class SpellingBee extends React.Component {
	render(){
		return(
			<HiveInput mainLetter="0" otherLetters='123456' />
		)
	} 
}

export default SpellingBee;
