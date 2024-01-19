import React from "react";
import './Teleop.scss'
import Stage from "./Stage";
import Trap from "./Trap";
import TeleopSpeaker from "./TeleopSpeaker";
import TeleopAmp from "./TeleopAmp";
export default function Teleop() {
    return (
        <>
        <TeleopSpeaker />
        <TeleopAmp />
        <Trap /> 
        <Stage />
        </>
    )
}