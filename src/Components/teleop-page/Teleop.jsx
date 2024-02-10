import React from 'react';
import './Teleop.scss';
import Stage from './Stage';
import Counter from '../shared/counter/Counter';

import { useDispatch } from 'react-redux';
import { setEndgame, setHighGoal, setLowGoal } from '../../app/Actions';

export default function Teleop() {
	const TeleopSpeaker = 'TeleopSpeaker';
	const TeleopAmp = 'TeleopAmp';
	const Trap = 'Trap';


	const dispatch = useDispatch();

	const lowGoal = (counter) => dispatch(setLowGoal('teleop', counter));
	const highGoal = (counter) => dispatch(setHighGoal('teleop', counter));
	const trap = (counter) => dispatch(setEndgame(counter));


	return (
		<>
			<h1>Teleop</h1>
			<h3 className="padding">Speaker</h3>
			<Counter type={ TeleopSpeaker } change={ highGoal }/>
			<h3 className="padding">Amp</h3>
			<Counter type={ TeleopAmp } change={ lowGoal }/>
			<h3 className="padding">Trap</h3>
			<Counter type={ Trap } change={ trap }/>
			<h3 className="padding">Stage</h3>
			<Stage/>
		</>
	);
}
