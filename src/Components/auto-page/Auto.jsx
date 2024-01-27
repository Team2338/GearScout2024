
import React from 'react';
import Leave from './leave';
import Counter from '../shared/counter/Counter';
import './Auto.scss'
import { useDispatch } from 'react-redux';
import { setLowGoal, setHighGoal } from '../../app/Actions';

export default function Auto() {
    const AutoSpeaker = "AutoSpeaker"
    const AutoAmp = "AutoAmp"
    const dispatch = useDispatch()

    const lowGoal = (counter) => dispatch(setLowGoal('auto', counter))
    const highGoal = (counter) => dispatch(setHighGoal('auto', counter))
    

    return (
        <>
        <h1>Auto</h1>
        <h3 className='padding'>Leave</h3>
        <Leave />
        <h3 className='padding'>Speaker</h3>
        <Counter type={AutoSpeaker} change={highGoal} />
        <h3 className='padding'>Amp</h3>
        <Counter type={AutoAmp} change={lowGoal} />
        </>
    )
}
