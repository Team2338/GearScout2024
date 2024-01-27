import { AppState } from '../models/state';
import { ActionTypes } from './Actions';



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
		trap: 0,
		stageClimb: 0
	}
};

export function reducer(state: AppState = INITIAL_STATE, action): AppState {
	switch (action.type) {
		case ActionTypes.RESET_STATE:
			return {
				...state,
				auto: INITIAL_STATE.auto,
				teleop: INITIAL_STATE.teleop
			};
			
		case ActionTypes.GET_OFFLINE_MATCHES_SUCCESS:
			return {
				...state,
				cache: {
					matches: action.payload
				}
			};
		case ActionTypes.CLEAR_OFFLINE_MATCHES:
			return {
				...state,
				cache: {
					matches: []
				}
			};
		case ActionTypes.MOBILITY_2024:
			return {
				...state, 
				auto: {
					...state.auto,
					mobility: action.payload
				}
			}
		case ActionTypes.AUTO_HIGH_GOAL_2024:
			return {
				...state,
				auto: {
					...state.auto,
					highGoal: action.payload
				}
			}
		case ActionTypes.AUTO_LOW_GOAL_2024:
			return {
				...state,
				auto: {
					...state.auto,
					lowGoal: action.payload
					}
				}
		case ActionTypes.TELEOP_HIGH_GOAL_2024:
			return {
				...state,
				teleop: {
					...state.teleop,
					highGoal: action.payload
				}
			}
		case ActionTypes.TELEOP_LOW_GOAL_2024:
			return {
				...state,
				teleop: {
					...state.teleop,
					lowGoal: action.payload
				}
			}
		case ActionTypes.CLIMB_2024:
			return {
				...state,
				teleop: {
					...state.teleop,
					stageClimb: action.payload
				}
			}
		case ActionTypes.ENDGAME_2024:
			return {
				...state, 
				teleop: {
					...state.teleop,
					trap: action.payload
				}
			}
		default:
			return state;
	}
}
