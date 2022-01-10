import React from 'react';
import HiveCell from './HiveCell';
import '../css/Hive.scss';

class Hive extends React.Component {
	render(){
		return(
			<div className="hive">
				<HiveCell isCenter={true} letter='A' />
				<div className="hive-circle">
					<HiveCell letter='B' />
					<HiveCell letter='C' />
					<HiveCell letter='D' />
					<HiveCell letter='E' />
					<HiveCell letter='F' />
					<HiveCell letter='G' />
				</div>
			</div>
		)
	} 
}

export default Hive;
