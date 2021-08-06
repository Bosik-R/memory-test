import React, { useState, useEffect } from 'react';
import { ACTIONS } from '../../utils/reducer';
import styled from 'styled-components';

const ValueFader = styled.span`
	font-size: 70px;
	font-weight: bold;
	margin: 0;
	padding: 0;
	opacity: ${({ show }) => (show ? '1' : '0')};
	transition: all 1s ease;
`;

const Fader = ({ sequence, dispatch }) => {
	const [index, setIndex] = useState(0);
	const [show, setShow] = useState(true);

	useEffect(() => {
		if (index < sequence.length) {
			const timeout = setInterval(() => {
				if (show) {
					setShow(false);
					setTimeout(() => setIndex(index + 1), 1500);
				} else {
					setShow(true);
				}
			}, 1500);
			return () => clearInterval(timeout);
		} else {
			dispatch({ type: ACTIONS.END_SEQUENCE });
		}
	}, [index, show]);

	return <ValueFader show={show}>{sequence[index]}</ValueFader>;
};

export default Fader;
