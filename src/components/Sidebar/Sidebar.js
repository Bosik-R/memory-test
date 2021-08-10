import React from 'react';
import DisplayStats from '../DisplayStats/DisplayStats';
import * as S from './Siedebar.Elements';
import { ACTIONS } from '../../utils/reducer';

const Sidebar = ({ level, score, disable, dispatch }) => {
	const handleStart = () => {
		setTimeout(() => {
			dispatch({
				type: ACTIONS.START_SEQUENCE,
			});
		}, 1000);
	};

	return (
		<S.SidebarContainer>
			<DisplayStats title='level' value={level} />
			<DisplayStats title='score' value={score} />
			<S.StartBtn
				onClick={() => handleStart()}
				disabled={!disable}
				play={!disable}
			>
				START
			</S.StartBtn>
		</S.SidebarContainer>
	);
};

export default Sidebar;
