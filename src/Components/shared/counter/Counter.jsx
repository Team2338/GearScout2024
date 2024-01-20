import React, { useState } from "react";
import { Button } from "@mui/material";
import '../css/Counters.scss'

export default function Counter({type}) { 
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
    if (type==='Trap' && counter > 3) {
        console.log('cannot have greater than 3 in trap! resetting to max')
        setCounter(3)


    }


    return(
        <div className="layout">
        <Button variant='contained' onClick={minusOne}>-</Button>
        <h3 className="name">{counter}</h3>
        <Button variant='contained' onClick={plusOne}>+</Button>
        </div>
    )
}