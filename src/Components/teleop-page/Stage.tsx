import { Button } from '@mui/material';
import React, { useState } from 'react';
import { setClimb } from '../../app/Actions';
import { useAppDispatch, useAppSelector } from '../../app/Hooks';

function Stage() {

	const stageValues = {
		none: 0,
		park: 1,
		single: 3,
		double: 5,
		triple: 7
	};

	const dispatch = useAppDispatch();
	const stageValue = useAppSelector(state => state.teleop.stageClimb);

	const [none, setNone] = useState<'outlined' | 'contained'>('outlined');
	const [parked, setParked] = useState<'outlined' | 'contained'>('outlined');
	const [single, setSingle] = useState<'outlined' | 'contained'>('outlined');
	const [double, setDouble] = useState<'outlined' | 'contained'>('outlined');
	const [triple, setTriple] = useState<'outlined' | 'contained'>('outlined');

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
				variant={ none }
				onClick={ handleNoneClick }
			>
				None
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ parked }
				onClick={ handleParkedClick }
			>
				Parked
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ single }
				onClick={ handleSingleClick }
			>
				Single Climb
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ double }
				onClick={ handleDoubleClick }
			>
				Double Climb
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ triple }
				onClick={ handleTripleClick }
			>
				Triple Climb
			</Button>
		</div>
	);
}

export default Stage;
