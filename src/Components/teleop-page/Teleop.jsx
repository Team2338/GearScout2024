import React from "react";
import './Teleop.scss'
import Stage from "./Stage";
import Counter from "../shared/counter/Counter";
import InfoButton from "../shared/info-buttons/InfoButtons";

export default function Teleop() {
    const TeleopSpeaker = 'TeleopSpeaker'
    const TeleopAmp = 'TeleopAmp'
    const Trap ='Trap'
    const TeleopSpeakerInfoText  = 'Click the + and - buttons to note how many Notes the robot scored in the SPEAKER during Teleop.'
    const TeleopAmpInfoText = 'Click the + and - buttons to note how many Notes the robot scored in the AMP during Teleop.'
    const TrapInfoText = 'Click the + and - buttons to note how many Notes the robot scored in the TRAP: maximum of 3.'
    const StageInfoText = 'Click the appropriate button to show if the robot parked or climbed with the number of robots on the same chain.'
    return (
        <>
        <h1>Teleop</h1>
        <h3>Speaker</h3>
        <InfoButton text={TeleopSpeakerInfoText} />
        <Counter type={TeleopSpeaker} />
        <h3>Amp</h3>
        <InfoButton text={TeleopAmpInfoText} />
        <Counter type={TeleopAmp} />
        <h3>Trap</h3>
        <InfoButton text={TrapInfoText} />
        <Counter type={Trap} /> 
        <h3>Stage</h3>
        <InfoButton text={StageInfoText} />
        <Stage />
        </>
    )
}