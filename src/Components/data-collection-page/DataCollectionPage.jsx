import './DataCollectionPage.scss'
import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button'
import { resetState } from '../../app/Actions';
import { submitMatch } from '../../app/Effects.ts';
import MatchInformation from '../match-information/MatchInformation'
import AllianceSelection from './AllianceSelection';
import Auto from '../auto-page/Auto';
import Teleop from '../teleop-page/Teleop';

const selector = (state) => ({
	mobility: state.auto.mobility,
	autoHighGoal: state.auto.highGoal,
	autoLowGoal: state.auto.lowGoal,
	teleopHighGoal: state.teleop.highGoal,
	teleopLowGoal: state.teleop.lowGoal,
	stageClimb: state.teleop.stageClimb,
	trap: state.teleop.trap

});

const connectDispatch = (dispatch) => ({
	resetState: () => dispatch(resetState()),
	submitMatch: (teamNumber, secretCode, match) => dispatch(submitMatch(teamNumber, secretCode, match)),
});

const INITIAL_STATE = {
	scoutingTeamNumber: '',
	matchNumber: '',
	allianceColor: 'UNKNOWN',
}

class ConnectedDataCollectionPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = INITIAL_STATE;
	}

	setRobotNumber = (robotNumber) => {
		this.setState({
			scoutingTeamNumber: robotNumber
		});
	};

	setMatchNumber = (matchNumber) => {
		this.setState({
			matchNumber: matchNumber
		});
	};

	setAllianceColor = (color) => {
		this.setState({
			allianceColor: color
		});
	};


	generateObjectives = () => {
		const autoObjectives = [
			{
				gamemode: 'AUTO',
				objective: 'MOBILITY_2024',
				count: this.props.mobility
			},
			{
				gamemode: 'AUTO',
				objective: 'HIGH_GOAL_2024',
				count: this.props.autoHighGoal
			},
			{
				gamemode: 'AUTO',
				objective: 'LOW_GOAL_2024',
				count: this.props.autoLowGoal
			},
		];

		const teleopObjectives = [
			{
				gamemode: 'TELEOP',
				objective: 'HIGH_GOAL_2024',
				count: this.props.teleopHighGoal
			},
			{
				gamemode: 'TELEOP',
				objective: 'LOW_GOAL_2024',
				count: this.props.teleopLowGoal
			},
			{
				gamemode: 'TELEOP',
				objective: 'CLIMB_2024',
				count: this.props.stageClimb
			},
			{
				gamemode: 'TELEOP',
				objective: 'ENDGAME_2024',
				count: this.props.trap
			}
		];

		const objectives = [];
			objectives.push(...autoObjectives);

			objectives.push(...teleopObjectives);

			return objectives;
	}

	submit = () => {
		// Let the user know if they missed an input
		const problems = [];
		if (this.state.matchNumber.length === 0) {
			problems.push('You must specify a match number');
		}
		if (this.state.scoutingTeamNumber.length === 0) {
			problems.push('You must specify a team number');
		}
		if (this.state.allianceColor === 'UNKNOWN') {
			problems.push('You must specify an alliance color');
		}
		if (problems.length > 0) {
			alert(problems.join('\n'));
			return;
		}

		const match = {
			eventCode: this.props.eventCode,
			matchNumber: this.state.matchNumber,
			robotNumber: this.state.scoutingTeamNumber,
			creator: this.props.scouterName,
			allianceColor: this.state.allianceColor,
			gameYear: 2024,
			objectives: this.generateObjectives()
		};

		this.props.submitMatch(this.props.teamNumber, this.props.secretCode, match);

		this.props.resetState();
		this.setState(INITIAL_STATE);
	};


	render() {
		return (
			<div className='background'>
				 
				<MatchInformation
					scoutingTeamNumber={this.state.scoutingTeamNumber}
					matchNumber={this.state.matchNumber}
					setScoutingTeamNumber={this.setRobotNumber}
					setMatchNumber={this.setMatchNumber}
				/>
				<div>
					<AllianceSelection selectAlliance={this.setAllianceColor} selected={this.state.allianceColor}/>
					<Auto />
					<Teleop />
				</div>
				<div className='submit'>
					<Button sx={{ m: 0.5 }} style={{textTransform: 'capitalize'}} variant='outlined' className='submit' href='/'>Back</Button>
					<Button sx={{ m: 0.5 }} style={{textTransform: 'capitalize'}} variant='contained' className='submit' onClick={this.submit}>Submit</Button>
				</div>
			</div>
		);
	}
}

const DataCollectionPage = connect(selector, connectDispatch)(ConnectedDataCollectionPage);
export default DataCollectionPage;
