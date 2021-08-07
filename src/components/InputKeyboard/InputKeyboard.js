import React, { useState } from 'react';
import * as S from './InputKeyboard.Elements';
import { ACTIONS } from '../../utils/reducer';

const inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const InputKeyboard = ({ sequence, disable, dispatch }) => {
	const [index, setIndex] = useState(0);

	const handleAnswer = (inputValue) => {
		console.log(inputValue);

		if (inputValue === sequence[index]) {
			dispatch({ type: ACTIONS.GOOD_VALUE, payload: inputValue });
			setIndex(index + 1);

			if (index === sequence.length - 1) {
				setTimeout(() => {
					dispatch({ type: ACTIONS.LEVEL_COMPLETED });
					setIndex(0);
				}, 1000);
			}
		} else {
			console.log('działa bad value');
			dispatch({ type: ACTIONS.BAD_VALUE });
			setIndex(0);
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
