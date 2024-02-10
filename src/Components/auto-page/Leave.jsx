import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMobility } from '../../app/Actions';

function Leave() {
	const leaveValues = {
		no: 0,
		yes: 2
	};
	const dispatch = useDispatch();
	const leaveValue = useSelector(state => state.auto.mobility);

	const [no, setNo] = useState('outlined');
	const [yes, setYes] = useState('outlined');

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
