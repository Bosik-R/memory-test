import React from 'react'
import { ACTIONS } from '../../utils/reducer';
import * as S from './WelcomeView.Elements';

const WelcomeView = ({digits, dispatch}) => {
  const handleDigitLength = (value) => {
    const parsedValue = parseInt(value);

    dispatch({ type: ACTIONS.DIGIT_LENGTH, payload: {digits: parsedValue, level: parsedValue + 2} })
  } 

  return (
    <S.Wrapper>
      <S.Content>
        <S.Row>
          <S.Title>Welcome</S.Title>
          <S.Paragraph>Test your memory by using Cambrige App clone</S.Paragraph>
        </S.Row>
        <S.Row>
          <S.Paragraph>Press <S.Image src='images/startbtn.png' alt='start button'/> to play the sequence in the display box <S.Image src='images/displaybox.png' alt='display box'/></S.Paragraph>
          <S.Paragraph>The amount of digits to memorize is shown above the display box  <S.Image src='images/digits.png' alt='digits'/>.</S.Paragraph>
          <S.Paragraph>After the sequence is finished you can enter your answer.</S.Paragraph>
        </S.Row>
        <S.Row>
          <S.Col>
            <S.Span>starting digits length</S.Span>
            <S.DigitLength type='number' min='3' value={digits} onChange={e => handleDigitLength(e.target.value)}/>
          </S.Col>
          <S.Btn onClick={() => dispatch({type: ACTIONS.CLOSE_WELCOME})}>BEGIN</S.Btn>
        </S.Row>
      </S.Content>
    </S.Wrapper>
  )
}

export default WelcomeView;
