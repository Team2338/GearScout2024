import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClimb } from '../../app/Actions';

function Stage() {

	const stageValues = {
		none: 0,
		park: 1,
		single: 3,
		double: 5,
		triple: 7
	};

	const dispatch = useDispatch();
	const stageValue = useSelector(state => state.teleop.stageClimb);

	const [None, setNone] = useState('outlined');
	const [Parked, setParked] = useState('outlined');
	const [Single, setSingle] = useState('outlined');
	const [Double, setDouble] = useState('outlined');
	const [Triple, setTriple] = useState('outlined');

	const handleNoneClick = () => {
		setNone('contained');
		setParked('outlined');
		setSingle('outlined');
		setDouble('outlined');
		setTriple('outlined');
		dispatch(setClimb(stageValues.none));
	};

	const handleParkedClick = () => {
		setParked('contained');
		setNone('outlined');
		setSingle('outlined');
		setDouble('outlined');
		setTriple('outlined');
		dispatch(setClimb(stageValues.park));
	};

	const handleSingleClick = () => {
		setSingle('contained');
		setNone('outlined');
		setParked('outlined');
		setDouble('outlined');
		setTriple('outlined');
		dispatch(setClimb(stageValues.single));
	};

	const handleDoubleClick = () => {
		setDouble('contained');
		setNone('outlined');
		setParked('outlined');
		setSingle('outlined');
		setTriple('outlined');
		dispatch(setClimb(stageValues.double));
	};

	const handleTripleClick = () => {
		setTriple('contained');
		setNone('outlined');
		setParked('outlined');
		setSingle('outlined');
		setDouble('outlined');
		dispatch(setClimb(stageValues.triple));
	};

	return (
		<div className="spacing">

			<Button
				sx={ {m: 0.5} }
				variant={ None }
				onClick={ handleNoneClick }
			>
				None
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ Parked }
				onClick={ handleParkedClick }
			>
				Parked
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ Single }
				onClick={ handleSingleClick }
			>
				Single Climb
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ Double }
				onClick={ handleDoubleClick }
			>
				Double Climb
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ Triple }
				onClick={ handleTripleClick }
			>
				Triple Climb
			</Button>
		</div>
	);
}

export default Stage;
