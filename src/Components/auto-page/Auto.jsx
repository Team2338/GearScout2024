
import React from 'react';
import Leave from './leave';
import Counter from '../shared/counter/Counter';
import './Auto.scss'
import InfoButton from '../shared/info-buttons/InfoButtons';

export default function Auto() {
    const AutoSpeaker = "AutoSpeaker"
    const AutoAmp = "AutoAmp"
    const LeaveInfoText = 'Click yes if the robot left their starting zone during Autonomous.'
    const AutoSpeakerInfoText = 'Click the + and - buttons to note how many Notes the robot scored in the SPEAKER during Auto.'
    const AutoAmpInfoText = 'Click the + and - buttons to note how many Notes the robot scored in the AMP during Auto.'
    return (
        <>
        <h1>Auto</h1>
        <h3>Leave</h3>
        <InfoButton text={LeaveInfoText} />
        <Leave />
        <h3>Speaker</h3>
        <InfoButton text={AutoSpeakerInfoText} />
        <Counter type={AutoSpeaker} />
        <h3>Amp</h3>
        <InfoButton text={AutoAmpInfoText} />
        <Counter type={AutoAmp} />
        </>
    )
}
