import React from 'react';
import * as S from './InputKeyboard.Elements';
import { ACTIONS } from '../../utils/reducer';

const inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const InputKeyboard = ({ sequence, index, disable, dispatch }) => {
	const handleAnswer = (inputValue) => {
		if (inputValue === sequence[index]) {
			dispatch({ type: ACTIONS.GOOD_ANSWER, payload: inputValue });

			if (index === sequence.length - 1) {
				setTimeout(() => {
					dispatch({ type: ACTIONS.LEVEL_COMPLETED });
				}, 1000);
			}
		} else {
			dispatch({ type: ACTIONS.BAD_ANSWER, payload: inputValue });
		}
	};

	return (
		<S.InputKeyboardContainer>
			<S.InputKeyboardWrapper>
				{inputs.map((inputValue, index) => (
					<S.Btn
						key={index}
						onClick={(e) => handleAnswer(inputValue)}
						disabled={disable}
					>
						{inputValue}
					</S.Btn>
				))}
			</S.InputKeyboardWrapper>
		</S.InputKeyboardContainer>
	);
};

export default InputKeyboard;
