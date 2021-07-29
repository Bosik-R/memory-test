import React from 'react';
import * as S from './DisplayDigit.Elements';

const DisplayDigit = ({level, value}) => {
  return (
    <S.DisplayDigitContainer>
      <S.DisplayDigitWrapper>
        <S.DisplayLevel>Digits {level}</S.DisplayLevel>
        <S.DisplayDigitValue>{value}</S.DisplayDigitValue>
      </S.DisplayDigitWrapper>  
    </S.DisplayDigitContainer>
  )
}

export default DisplayDigit;
