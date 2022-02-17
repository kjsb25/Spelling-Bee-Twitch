import React from 'react';
import Polygon from 'react-polygon';
import '../css/HiveCell.scss';


class LandingPage extends React.Component {
	render(){
		return(
			<React.Fragment>
		        <ManualHydrateForm addWords={this.addWords} addStats={this.addStats}/>
		        <SpellingBee />
		      </React.Fragment>
		)
	} 
}

export default LandingPage;
