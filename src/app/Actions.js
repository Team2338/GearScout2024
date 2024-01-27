export const ActionTypes = {
	GET_OFFLINE_MATCHES_SUCCESS: '[CACHE] Successfully got offline matches',
	CLEAR_OFFLINE_MATCHES: '[CACHE] Clear matches',
	MOBILITY_2024: '[MOVE] Set auto leave',
	AUTO_HIGH_GOAL_2024: '[GOAL] Set Auto Speaker',
	AUTO_LOW_GOAL_2024: '[GOAL] Set Auto Amp',
	TELEOP_HIGH_GOAL_2024: '[GOAL] Set Teleop Speaker',
	TELEOP_LOW_GOAL_2024: '[GOAL] Set Teleop Amp',
	CLIMB_2024: '[CLIMB] Set hanging chain',
	ENDGAME_2024: '[ENDGAME] Set trap ',
};


export const resetState = () => {
	return {
		type: ActionTypes.RESET_STATE
	};
};

export const getOfflineMatchesSuccess = (matches) => {
	return {
		type: ActionTypes.GET_OFFLINE_MATCHES_SUCCESS,
		payload: matches
	};
};

export const clearOfflineMatches = () => {
	return {
		type: ActionTypes.CLEAR_OFFLINE_MATCHES,
	};
};
//2024 code below
export const setMobility = (value) => {
	return {
	type: ActionTypes.MOBILITY_2024,
	payload: value
	}
}
export const setHighGoal = (gamemode, value) => {
	const type = (gamemode === 'teleop') ? ActionTypes.TELEOP_HIGH_GOAL_2024 : ActionTypes.AUTO_HIGH_GOAL_2024
	return {
		type: type,
		payload: value

	}
}
export const setLowGoal = (gamemode, value) => {
	const type = (gamemode === 'teleop') ? ActionTypes.TELEOP_LOW_GOAL_2024 : ActionTypes.AUTO_LOW_GOAL_2024
	return {
		type: type,
		payload: value
	}
}
export const setClimb = (value) => {
	return {
		type: ActionTypes.CLIMB_2024,
		payload: value
	}
}
export const setEndgame = (value) => {
	return {
		type: ActionTypes.ENDGAME_2024,
		payload: value
	}
}

