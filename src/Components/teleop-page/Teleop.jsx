import React from "react";
import './Teleop.scss'
import Stage from "./Stage";
import Trap from "./Trap";
import TeleopSpeaker from "./TeleopSpeaker";
import TeleopAmp from "./TeleopAmp";
import Counter from "../shared/counter/Counter";
export default function Teleop() {
    const TeleopSpeaker = 'TeleopSpeaker'
    const TeleopAmp = 'TeleopAmp'
    const Trap ='Trap'
    return (
        <>
        <h1>Teleop</h1>
        <h3>Speaker</h3>
        <Counter type={TeleopSpeaker} />
        <h3>Amp</h3>
        <Counter type={TeleopAmp} />
        <h3>Trap</h3>
        <Counter type={Trap} /> 
        <h3>Stage</h3>
        <Stage />
        </>
    )
}