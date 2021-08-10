import React from 'react';
import * as S from './MessageModal.Elements';
import { ACTIONS } from '../../utils/reducer';

const MessageModal = ({
	health,
	level,
	score,
	value,
	sequence,
	index,
	dispatch,
}) => {
	const handleClick = () => {
		if (health === 0) dispatch({ type: ACTIONS.RESET });
		else dispatch({ type: ACTIONS.RESTART_LEVEL });
	};

	return (
		<S.Wrapper>
			<S.Content>
				{health === 0 ? <S.Message>Game Over</S.Message> : null}
				{health === 0 ? <S.Paragraph>level : {level}</S.Paragraph> : null}
				{health === 0 ? <S.Paragraph>score : {score}</S.Paragraph> : null}
				<S.Paragraph>
					the '{index + 1}' digit you typed was : {value}
				</S.Paragraph>
				<S.Paragraph>
					the corect answer should be : {sequence[index]}
				</S.Paragraph>
				<S.HandleBtn onClick={() => handleClick()}>
					{health === 0 ? 'RESET' : 'RESTART'}
				</S.HandleBtn>
			</S.Content>
		</S.Wrapper>
	);
};

export default MessageModal;
