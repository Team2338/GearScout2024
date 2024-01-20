import React from "react";
import './Teleop.scss'
import Stage from "./Stage";
import Trap from "./Trap";
import TeleopSpeaker from "./TeleopSpeaker";
import TeleopAmp from "./TeleopAmp";
export default function Teleop() {
    return (
        <>
        <h1>Teleop</h1>
        <h3>Speaker</h3>
        <TeleopSpeaker />
        <h3>Amp</h3>
        <TeleopAmp />
        <h3>Trap</h3>
        <Trap /> 
        <h3>Stage</h3>
        <Stage />
        </>
    )
}