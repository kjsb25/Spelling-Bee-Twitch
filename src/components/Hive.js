import React from 'react';
import HiveCell from './HiveCell';
import '../css/Hive.scss';

class Hive extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {mainLetter: props.mainLetter,
					  otherLetters: props.otherLetters};
	}

	render(){
		return(
			<div className="hive">
				<HiveCell isCenter={true} letter={this.state.mainLetter} />
				<div className="hive-circle">
					<HiveCell letter={this.props.otherLetters[0]} />
					<HiveCell letter={this.props.otherLetters[1]} />
					<HiveCell letter={this.props.otherLetters[2]} />
					<HiveCell letter={this.props.otherLetters[3]} />
					<HiveCell letter={this.props.otherLetters[4]} />
					<HiveCell letter={this.props.otherLetters[5]} />
				</div>
				
			</div>
		)
	} 
}

export default Hive;
