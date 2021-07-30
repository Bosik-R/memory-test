import React, { useState } from 'react';
import * as S from './InputKeyboard.Elements';
import { ACTIONS } from '../App';

const inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const InputKeyboard = ({ sequence, disable, dispatch}) => {
  const [index, setIndex] = useState(0);
 
  const handleAnswer = (e, input) => {
    //e.preventDefault();

    if(input === sequence[index]) {
      dispatch({type: ACTIONS.GOOD_VALUE, payload: input})
      setIndex(index + 1)

      if(index === sequence.length -1 ){
        setTimeout(() => {
          dispatch({type: ACTIONS.LEVEL_COMPLETED})
          setIndex(0)
        }, 500)
      }  
    }else{
      dispatch({type: ACTIONS.BAD_VALUE})
      setIndex(0)
    }
  }

  return (
    <S.InputKeyboardContainer>
      <S.InputKeyboardWrapper>
        {inputs.map((input, index) => (
          <S.Btn key={index} onClick={(e) => handleAnswer(e, input)} disabled={disable}>{input}</S.Btn>
        ))}
      </S.InputKeyboardWrapper>
    </S.InputKeyboardContainer>
  )
}

export default InputKeyboard
