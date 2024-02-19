import { Button } from '@mui/material';
import React from 'react';
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

	const getButtonStyle = (status) => {
		if (stageValue === stageValues[status]) {
			return 'contained';
		}
		return 'outlined';
	}


	const setValue = (status) => {
		const points = stageValues[status];
		dispatch(setClimb(points));
	}

	

	return (
		<div className="spacing">

			<Button
				sx={ {m: 0.5} }
				variant={ getButtonStyle('none') }
				onClick={() => setValue('none')}
			>
				None
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ getButtonStyle('park') }
				onClick={ () => setValue('park') }
			>
				Parked
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ getButtonStyle('single') }
				onClick={ () => setValue('single') }
			>
				Single Climb
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ getButtonStyle('double') }
				onClick={ () => setValue('double') }
			>
				Double Climb
			</Button>
			<Button
				sx={ {m: 0.5} }
				variant={ getButtonStyle('triple') }
				onClick={ () => setValue('triple') }
			>
				Triple Climb
			</Button>
		</div>
	);
}

export default Stage;
