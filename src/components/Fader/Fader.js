import React, { useState, useEffect } from 'react';
import { ACTIONS } from '../../utils/reducer';
import styled from 'styled-components';
import { DigitValue } from '../DisplayDigit/DisplayDigit.Elements';

const ValueFader = styled(DigitValue)`
	opacity: ${({ show }) => (show ? '1' : '0')};
	transition: all 0.6s ease-in-out;
`;

const Fader = ({ sequence, dispatch }) => {
	const [index, setIndex] = useState(0);
	const [show, setShow] = useState(true);

	useEffect(() => {
		if (index < sequence.length) {
			const timeout = setInterval(() => {
				if (show) {
					setShow(false);
					setTimeout(() => setIndex(index + 1), 1000);
				} else {
					setShow(true);
				}
			}, 1000);
			return () => clearInterval(timeout);
		} else {
			dispatch({ type: ACTIONS.END_SEQUENCE });
		}
	}, [index, show, sequence.length, dispatch]);

	return <ValueFader show={show}>{sequence[index]}</ValueFader>;
};

export default Fader;
