import React from 'react';
import './Teleop.scss';
import Stage from './Stage';
import Counter from '../shared/counter/Counter';
import { setEndgame, setHighGoal, setLowGoal, setTeleopPass } from '../../app/Actions';
import { useAppDispatch, useAppSelector } from '../../app/Hooks';
import { Gamemode } from '../../models/models';

export default function Teleop() {
	const dispatch = useAppDispatch();
	const lowGoalCount = useAppSelector(state => state.teleop.lowGoal);
	const highGoalCount = useAppSelector(state => state.teleop.highGoal);
	const passCount = useAppSelector(state => state.teleop.pass);
	const trapCount = useAppSelector(state => state.teleop.trap);

	const _setLowGoal = (counter: number) => {
		if (counter < 0) {
			return;
		}

		dispatch(setLowGoal(Gamemode.teleop, counter));
	};

	const _setHighGoal = (counter: number) => {
		if (counter < 0) {
			return;
		}

		dispatch(setHighGoal(Gamemode.teleop, counter));
	};

	const _setPass = (counter: number) => {
		if (counter < 0) {
			return;
		}

		dispatch(setTeleopPass(counter));
	};

	const _setTrap = (counter: number) => {
		if (counter < 0 || counter > 3) {
			return;
		}

		dispatch(setEndgame(counter));
	};


	return (
		<>
			<h1>Teleop</h1>
			<h3 className="padding">Speaker</h3>
			<Counter value={ highGoalCount } change={ _setHighGoal } />
			<h3 className="padding">Amp</h3>
			<Counter value={ lowGoalCount } change={ _setLowGoal } />
			<h3 className="padding">Pass</h3>
			<Counter value={ passCount } change={ _setPass } />
			<h3 className="padding">Trap</h3>
			<Counter value={ trapCount } change={ _setTrap } />
			<h3 className="padding">Stage</h3>
			<Stage />
		</>
	);
}
