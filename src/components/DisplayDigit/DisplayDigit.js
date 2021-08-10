import React from 'react';
import * as S from './DisplayDigit.Elements';
import Fader from '../Fader/Fader';

const DisplayDigit = ({ digits, value, sequence, start, dispatch }) => {
	return (
		<S.DisplayDigitContainer>
			<S.DisplayDigitWrapper>
				<S.DigitsInfo>{`${digits}  Digits`}</S.DigitsInfo>
				<S.DisplayDigitValue>
					{start ? (
						<Fader sequence={sequence} dispatch={dispatch} />
					) : (
						<S.DigitValue>{value}</S.DigitValue>
					)}
				</S.DisplayDigitValue>
			</S.DisplayDigitWrapper>
		</S.DisplayDigitContainer>
	);
};

export default DisplayDigit;
