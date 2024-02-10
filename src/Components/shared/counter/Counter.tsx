import React from 'react';
import { Button } from '@mui/material';
import './Counter.scss';

interface IProps {
	value: number;
	change: (next: number) => void;
}

export default function Counter({ value, change }: IProps) {

	function plusOne() {
		change(value + 1);
	}

	function minusOne() {
		change(value - 1);
	}

	return (
		<div className="layout">
			<Button variant="contained" onClick={ minusOne }>-</Button>
			<h3 className="name">{ value }</h3>
			<Button variant="contained" onClick={ plusOne }>+</Button>
		</div>
	);
}
