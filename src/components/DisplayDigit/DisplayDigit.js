import React, { useState } from 'react';
import * as S from './DisplayDigit.Elements';
import Fader from '../Fader/Fader';

const DisplayDigit = ({
	digits,
	value,
	sequence,
	start,
	dispatch,
	success,
}) => {
	return (
		<S.DisplayDigitContainer>
			<S.DisplayDigitWrapper>
				<S.DisplayLevel success={success}>
					{success ? 'Greate' : `${digits} Digits`}
				</S.DisplayLevel>
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
