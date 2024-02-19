import { Button } from '@mui/material';
import React from 'react';
import { setMobility } from '../../app/Actions';
import { useAppDispatch, useAppSelector } from '../../app/Hooks';

function Leave() {
	const leaveValues = {
		no: 0,
		yes: 2
	};
	const dispatch = useAppDispatch();
	const leaveValue = useAppSelector(state => state.auto.mobility);

	const getButtonStyle = (status) => {
		if (leaveValue === leaveValues[status]) {
				return 'contained';
		}
		return 'outlined';
	}

	const setValue = (status) => {
		const points = leaveValues[status];
		dispatch(setMobility(points))
	}



	return (
		
		<div className="spacing">
			<Button
				sx={ {m: 0.5} }
				variant={ getButtonStyle('no') }
				onClick={() => setValue('no') }
			>
				No
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ getButtonStyle('yes') }
				onClick={ () => setValue('yes') }
			>
				Yes
			</Button>
		</div>
	);
}

export default Leave;
