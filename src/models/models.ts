export enum Gamemode {
	teleop = 'TELEOP',
	auto = 'AUTO'
}

export enum AllianceColor {
	red = 'RED',
	blue = 'BLUE',
	unknown = 'UNKNOWN'
}

export interface IMatch {
	gameYear: number;
	eventCode: string;
	matchNumber: string;
	robotNumber: string;
	creator: string;
	allianceColor: string;
	objectives: IObjective[];
}

export interface ICachedMatch extends IMatch {
	teamNumber: string;
	secretCode: string;
}

export interface IObjective {
	gamemode: Gamemode,
	objective: string;
	count: number;
	list?: number[];
}
