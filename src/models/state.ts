import { ICachedMatch } from './models';

export interface AppState {
	cache: {
		matches: ICachedMatch[];
	};
	teleop: {
		lowGoal: number;
		highGoal: number;
		pass: number;
		trap: number;
		stageClimb: number;
	};
	auto: {
		mobility: number;
		lowGoal: number;
		highGoal: number;

	};
}
