import React from "react";
import './Teleop.scss'
import Stage from "./Stage";
import Trap from "./Trap";
import TeleopSpeaker from "./TeleopSpeaker";

export default function Teleop() {
    return (
        <>
        <TeleopSpeaker />
        <Trap /> 
        <Stage />
        </>
    )
}