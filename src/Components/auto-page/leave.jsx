import { Button } from '@mui/material';
import React, { useState } from 'react';

function Leave(props) {
    const [no, setNo] = useState('outlined')
    const [yes, setYes] = useState('outlined')

	const handleNoClick = () => {
		setNo('contained')
        setYes('outlined')
	};

	const handleYesClick = () => {
		setYes('contained')
        setNo('outlined')
	};

	let blueColor = '#01233D';
	let redColor = '#01233D';

	


	return (
		<div className="spacing">
           
			<Button
				sx={{ m: 0.5 }}
				variant={yes}
				onClick={handleYesClick}
			>
				Yes
			</Button>
			<Button
				sx={{ m: 0.5 }}
				variant={no}
				onClick={handleNoClick}
			>
				No
			</Button>
		</div>
	);
}

export default Leave;