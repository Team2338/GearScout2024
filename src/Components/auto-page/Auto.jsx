
import React from 'react';
import Leave from './Leave';
import Counter from '../shared/counter/Counter';
import './Auto.scss'


export default function Auto() {
    const AutoSpeaker = "AutoSpeaker"
    const AutoAmp = "AutoAmp"
    return (
        <>
        <h1>Auto</h1>
        <h3>Leave</h3>
        <Leave />
        <h3>Speaker</h3>
        <Counter type={AutoSpeaker} />
        <h3>Amp</h3>
        <Counter type={AutoAmp} />
        </>
    )
}
