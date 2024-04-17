import { AppState } from '../models/state';
import { ActionType, IAction } from './Actions';


const INITIAL_STATE: AppState = {
	cache: {
		matches: []
	},
	auto: {
		mobility: 0,
		lowGoal: 0,
		highGoal: 0
	},
	teleop: {
		lowGoal: 0,
		highGoal: 0,
		pass: 0,
		trap: 0,
		stageClimb: 0
	}
};

export function reducer(state: AppState = INITIAL_STATE, action: IAction): AppState {
	switch (action.type) {
		case ActionType.RESET_STATE:
			return {
				...state,
				auto: INITIAL_STATE.auto,
				teleop: INITIAL_STATE.teleop
			};

		case ActionType.GET_OFFLINE_MATCHES_SUCCESS:
			return {
				...state,
				cache: {
					matches: action.payload
				}
			};
		case ActionType.CLEAR_OFFLINE_MATCHES:
			return {
				...state,
				cache: {
					matches: []
				}
			};
		case ActionType.MOBILITY_2024:
			return {
				...state,
				auto: {
					...state.auto,
					mobility: action.payload
				}
			};
		case ActionType.AUTO_HIGH_GOAL_2024:
			return {
				...state,
				auto: {
					...state.auto,
					highGoal: action.payload
				}
			};
		case ActionType.AUTO_LOW_GOAL_2024:
			return {
				...state,
				auto: {
					...state.auto,
					lowGoal: action.payload
				}
			};
		case ActionType.TELEOP_HIGH_GOAL_2024:
			return {
				...state,
				teleop: {
					...state.teleop,
					highGoal: action.payload
				}
			};
		case ActionType.TELEOP_LOW_GOAL_2024:
			return {
				...state,
				teleop: {
					...state.teleop,
					lowGoal: action.payload
				}
			};
		case ActionType.TELEOP_PASS_2024:
			return {
				...state,
				teleop: {
					...state.teleop,
					pass: action.payload
				}
			};
		case ActionType.CLIMB_2024:
			return {
				...state,
				teleop: {
					...state.teleop,
					stageClimb: action.payload
				}
			};
		case ActionType.ENDGAME_2024:
			return {
				...state,
				teleop: {
					...state.teleop,
					trap: action.payload
				}
			};
		default:
			return state;
	}
}
