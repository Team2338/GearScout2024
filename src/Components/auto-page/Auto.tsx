import React from 'react';
import Leave from './Leave';
import Counter from '../shared/counter/Counter';
import './Auto.scss';
import { setHighGoal, setLowGoal } from '../../app/Actions';
import { useAppDispatch, useAppSelector } from '../../app/Hooks';
import { Gamemode } from '../../models/models';

export default function Auto() {
	const dispatch = useAppDispatch();
	const lowGoalCount = useAppSelector(state => state.auto.lowGoal);
	const highGoalCount = useAppSelector(state => state.auto.highGoal);

	const _setLowGoal = (counter: number) => {
		if (counter < 0) {
			return;
		}

		dispatch(setLowGoal(Gamemode.auto, counter));
	};

	const _setHighGoal = (counter: number) => {
		if (counter < 0) {
			return;
		}

		dispatch(setHighGoal(Gamemode.auto, counter));
	};


	return (
		<>
			<h1>Auto</h1>
			<h3 className="padding">Leave</h3>
			<Leave />
			<h3 className="padding">Speaker</h3>
			<Counter value={ lowGoalCount } change={ _setLowGoal } />
			<h3 className="padding">Amp</h3>
			<Counter value={ highGoalCount } change={ _setHighGoal } />
		</>
	);
}
