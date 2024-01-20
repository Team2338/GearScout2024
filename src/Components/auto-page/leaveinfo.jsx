import {
	Button,
	Popover
} from '@mui/material';
import React, { useState } from 'react';


function AutoLeaveStationInfoButton({ text, showOnHover }) {
	const [isOpen, setIsOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		setIsOpen(true);
	};
	const handleClose = () => {
		setAnchorEl(null);
		setIsOpen(false);
	};

	const popoverContent = (
		<div>
			<p>Press the yes if the bot left its starting zone during auto.</p>
		</div>
	);


	return (
		<div>
			<Button onClick={handleClick}>
				?
			</Button>
			<Popover
				open={isOpen}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				PaperProps={{
					style: {
						color: '#FF5000',
						backgroundColor: '#01233D',
						padding: '2px'
					}
				}}
			>
				{popoverContent}
			</Popover>

		</div>
	);
}
export default AutoLeaveStationInfoButton;