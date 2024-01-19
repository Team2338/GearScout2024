
import { Button } from '@mui/material';
import React from 'react';
import Leave from './leave';
import AutoSpeaker from './AutoSpeaker';
import AutoAmp from './AutoAmp';
import './Auto.scss'

export default function Auto() {
    return (
        <>
        <Leave />
        <AutoSpeaker />
        <AutoAmp />
        </>
    )
}
