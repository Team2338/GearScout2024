import { Button } from '@mui/material';
import React, { useState } from 'react';
import { setMobility } from '../../app/Actions';
import { useAppDispatch, useAppSelector } from '../../app/Hooks';

function Leave() {
	const leaveValues = {
		no: 0,
		yes: 2
	};
	const dispatch = useAppDispatch();
	const leaveValue = useAppSelector(state => state.auto.mobility);

	const [no, setNo] = useState<'outlined' | 'contained'>('outlined');
	const [yes, setYes] = useState<'outlined' | 'contained'>('outlined');

	const handleNoClick = () => {
		setNo('contained');
		setYes('outlined');
		dispatch(setMobility(leaveValues.no));
	};

	const handleYesClick = () => {
		setYes('contained');
		setNo('outlined');
		dispatch(setMobility(leaveValues.yes));
	};

	return (
		<div className="spacing">

			<Button
				sx={ {m: 0.5} }
				variant={ yes }
				onClick={ handleYesClick }
			>
				Yes
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ no }
				onClick={ handleNoClick }
			>
				No
			</Button>
		</div>
	);
}

export default Leave;
