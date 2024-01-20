
import { Button } from '@mui/material';
import React from 'react';
import Leave from './leave';
import AutoSpeaker from './AutoSpeaker';
import AutoAmp from './AutoAmp';
import './Auto.scss'

export default function Auto() {
    return (
        <>
        <h1>Auto</h1>
        <h3>Leave</h3>
        <Leave />
        <h3>Speaker</h3>
        <AutoSpeaker />
        <h3>Amp</h3>
        <AutoAmp />
        </>
    )
}
