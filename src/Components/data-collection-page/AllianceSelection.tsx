import { Button } from '@mui/material';
import React from 'react';
import { AllianceColor } from '../../models/models';

interface IProps {
	selectAlliance: (color: AllianceColor)  => void;
	selected: AllianceColor;
}

function AllianceSelection(props: IProps) {

	const handleRedClick = () => {
		props.selectAlliance(AllianceColor.red);
	};

	const handleBlueClick = () => {
		props.selectAlliance(AllianceColor.blue);
	};

	let blueColor = '#01233D';
	let redColor = '#01233D';

	if (props.selected === AllianceColor.red) {
		redColor = '#EE4444';
	} else if (props.selected === AllianceColor.blue) {
		blueColor = '#5577FF';
	}


	return (
		<div className="spacing">
			<Button
				sx={ {m: 0.5} }
				style={ {backgroundColor: redColor, margin: 5, textTransform: 'capitalize'} }
				variant={ props.selected === AllianceColor.red ? 'contained' : 'outlined' }
				onClick={ handleRedClick }
			>
				Red Alliance
			</Button>
			<Button
				sx={ {m: 0.5} }
				style={ {backgroundColor: blueColor, margin: 5, textTransform: 'capitalize'} }
				variant={ props.selected === AllianceColor.blue ? 'contained' : 'outlined' }
				onClick={ handleBlueClick }
			>
				Blue Alliance
			</Button>
		</div>
	);
}

export default AllianceSelection;
