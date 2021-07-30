import React, { useState, useEffect } from 'react';
import * as S from './DisplayDigit.Elements';

const DisplayDigit = ({digits, value, sequence, dispatch}) => {
  const [index, setIndex] = useState(0)
  const [sequenceValue, setSequenceValue] = useState('');
  const [show, setShow] = useState(false)
  const [start, setStart] = useState(false);
  console.log(sequenceValue);
  
  useEffect(()=> {
    
    if(start){
      if(index < sequence.length){
        setSequenceValue(sequence[index])
        setShow(true)
        
        setTimeout(() => {
          setShow(false)
          setIndex(index + 1);
        }, 1500)

      }
    }

    return () => {clearTimeout()};

  },[sequenceValue, start, index])

  return (
    <S.DisplayDigitContainer>
      <S.DisplayDigitWrapper>
        <S.DisplayLevel>{digits} Digits</S.DisplayLevel>
        <S.DisplayDigitValue show={show}>{start ? sequenceValue : value}</S.DisplayDigitValue>
      </S.DisplayDigitWrapper>
      <button onClick={() => setStart(true)}>START</button>  
    </S.DisplayDigitContainer>
  )
}

export default DisplayDigit;
