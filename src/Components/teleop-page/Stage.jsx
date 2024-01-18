import { Button } from '@mui/material';
import React, { useState } from 'react';

function Stage(props) {
    const [None, setNone] = useState('outlined')
    const [Parked, setParked] = useState('outlined')
    const [Single, setSingle ] = useState('outlined')
    const [Double, setDouble]   = useState('outlined')
    const [Triple, setTriple]   =useState('outlined')

	const handleNoneClick = () => {
		setNone('contained')
        setParked('outlined')
        setSingle('outlined')
        setDouble('outlined')
        setTriple('outlined')
	};

	const handleParkedClick = () => {
		setParked('contained')
        setNone('outlined')
        setSingle('outlined')
        setDouble('outlined')
        setTriple('outlined')

	};

    const handleSingleClick = () => {
        setSingle('contained')
        setNone('outlined')
        setParked('outlined')
        setDouble('outlined')
        setTriple('outlined')

    };

    const handleDoubleClick = () => {
        setDouble('contained')
        setNone('outlined')
        setParked('outlined')
        setSingle('outlined')
        setTriple('outlined')
    }

    const handleTripleClick = () => {
        setTriple('contained')
        setNone('outlined')
        setParked('outlined')
        setSingle('outlined')
        setDouble('outlined')
    }


	let blueColor = '#01233D';
	let redColor = '#01233D';

	


	return (
		<div className="spacing">
           
			<Button
				sx={{ m: 0.5 }}
				variant={None}
				onClick={handleNoneClick}
			>
				None
			</Button>
			<Button
				sx={{ m: 0.5 }}
				variant={Parked}
				onClick={handleParkedClick}
			>
				Parked
			</Button>
            <Button
                sx={{m: 0.5}}
                variant={Single}
                onClick={handleSingleClick}
                >
                    Single Climb
            </Button>
            <Button
                sx={{m: 0.5}}
                variant={Double}
                onClick={handleDoubleClick}
                >
                    Double Climb
                </Button>
                <Button
                sx={{m: 0.5}}
                variant={Triple}
                onClick={handleTripleClick}
                >
                    Triple Climb
                </Button>
		</div>
	);
}

export default Stage;