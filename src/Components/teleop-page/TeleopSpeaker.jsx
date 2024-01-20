import React, { useState } from "react";
import { Button } from "@mui/material";
import '../shared/css/Counters.scss'

export default function TeleopSpeaker() { 
    const [counter, setCounter] = useState(0)

    function plusOne() {
        setCounter(counter + 1)
    }
    function minusOne() {
        setCounter(counter - 1 )
    }
    if (counter < 0) {
        console.log('cannot have less than zero game pieces, resetting to zero')
        setCounter(0)
    }
    return(
        <div className="layout">
        <Button variant='contained' onClick={minusOne}>-</Button>
        <h3 className="name">{counter}</h3>
        <Button variant='contained' onClick={plusOne}>+</Button>
        </div>
    )
}