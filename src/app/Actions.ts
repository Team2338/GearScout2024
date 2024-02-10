import { Gamemode } from '../models/models';

export interface IAction {
	type: ActionType;
	payload?: any;
}

export enum ActionType {
	RESET_STATE = '[STATE] Reset data',
	GET_OFFLINE_MATCHES_SUCCESS = '[CACHE] Successfully got offline matches',
	CLEAR_OFFLINE_MATCHES = '[CACHE] Clear matches',
	MOBILITY_2024 = '[MOVE] Set auto leave',
	AUTO_HIGH_GOAL_2024 = '[GOAL] Set Auto Speaker',
	AUTO_LOW_GOAL_2024 = '[GOAL] Set Auto Amp',
	TELEOP_HIGH_GOAL_2024 = '[GOAL] Set Teleop Speaker',
	TELEOP_LOW_GOAL_2024 = '[GOAL] Set Teleop Amp',
	CLIMB_2024 = '[CLIMB] Set hanging chain',
	ENDGAME_2024 = '[ENDGAME] Set trap '
}

export const resetState = (): IAction => {
	return {
		type: ActionType.RESET_STATE
	};
};

export const getOfflineMatchesSuccess = (matches): IAction => {
	return {
		type: ActionType.GET_OFFLINE_MATCHES_SUCCESS,
		payload: matches
	};
};

export const clearOfflineMatches = (): IAction => {
	return {
		type: ActionType.CLEAR_OFFLINE_MATCHES,
	};
};

//2024 code below
export const setMobility = (value: number): IAction => {
	return {
		type: ActionType.MOBILITY_2024,
		payload: value
	};
};

export const setHighGoal = (gamemode: Gamemode, value: number): IAction => {
	const type = (gamemode === Gamemode.teleop) ? ActionType.TELEOP_HIGH_GOAL_2024 : ActionType.AUTO_HIGH_GOAL_2024;
	return {
		type: type,
		payload: value

	};
};

export const setLowGoal = (gamemode: Gamemode, value: number): IAction => {
	const type = (gamemode === Gamemode.teleop) ? ActionType.TELEOP_LOW_GOAL_2024 : ActionType.AUTO_LOW_GOAL_2024;
	return {
		type: type,
		payload: value
	};
};

export const setClimb = (value: number): IAction => {
	return {
		type: ActionType.CLIMB_2024,
		payload: value
	};
};

export const setEndgame = (value: number): IAction => {
	return {
		type: ActionType.ENDGAME_2024,
		payload: value
	};
};

