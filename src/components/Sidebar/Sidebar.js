import React from 'react';
import DisplayStats from '../DisplayStats/DisplayStats';
import * as S from './Siedebar.Elements';
import { ACTIONS } from '../../utils/reducer';
import { randomArray } from '../../utils/randomArray';

const Sidebar = ({ level, score, start, digits, dispatch }) => {
	const handleStart = () => {
		setTimeout(() => {
			const newSequence = randomArray(digits);

			dispatch({
				type: ACTIONS.START_SEQUENCE,
				payload: { sequence: newSequence },
			});
		}, 1000);
	};

	return (
		<S.SidebarContainer>
			<DisplayStats title='level' value={level} />
			<DisplayStats title='score' value={score} />
			<S.StartBtn play={start} onClick={() => handleStart()}>
				START
			</S.StartBtn>
		</S.SidebarContainer>
	);
};

export default Sidebar;
