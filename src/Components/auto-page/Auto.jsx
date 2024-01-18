import { Button } from '@mui/material';
import React from 'react';
import Leave from './leave';
function Auto(props) {

	const handleNoClick = () => {
		props.selectAlliance('RED');
	};

	const handleYesClick = () => {
		props.selectAlliance('YES');
	};

	let blueColor = '#01233D';
	let redColor = '#01233D';

	if (props.selected === 'RED') {
		redColor = '#EE4444';
	}
	else if (props.selected === 'BLUE') {
		blueColor = '#5577FF';
	}


	return (
		<div className="spacing">
            <h1>Leave</h1>
			<Leave /> 
		</div>
	);
}

export default Auto;