import React, { useState } from "react";
import { Button } from "@mui/material";


export default function AutoAmp() { 
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
        <div>Auto Amp</div>
        <Button variant='contained' onClick={plusOne}>+</Button>
        </div>
    )
}