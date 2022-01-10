import React from 'react';
import Polygon from 'react-polygon';
import '../css/HiveCell.scss';


class HiveCell extends React.Component {
	render(){
		const isCenter = this.props.isCenter;
		const tileSize=100;

		let tile;
		let className;
		if (isCenter) {
	      tile = <Polygon className="coloredCell" n={6} fill="#f7da21" size={tileSize} />;
	      className="hiveCell center";
	    } else {
	      tile = <Polygon className="coloredCell" n={6} fill="#e6e6e6" size={tileSize} />;
	      className="hiveCell";

	    }

		return(
			<div className={className}>
				{tile}
				<text className="cellLetter">{this.props.letter}</text>
			</div>
		)
	} 
}

export default HiveCell;
