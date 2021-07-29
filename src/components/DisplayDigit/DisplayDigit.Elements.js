import styled from 'styled-components';

export const DisplayDigitContainer = styled.section`
  display: grid;
  place-items: center;
  padding: 5px;
`;

export const DisplayDigitWrapper = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 50px;
  color: ${({disabled})=> (disabled ? '#9b9b9b' : '#ffffff')};
`;

export const DisplayLevel = styled.h1`
  color: inherit;
  margin-bottom: 20px;
  font-size: 30px;
`;

export const DisplayDigitValue = styled.div`
  width: 120px;
  height: 120px;
  font-size: 80px;
  font-weight: bold;
  color: inherit;
  border-radius: 10px;
  border: 1px solid #ffffff;
  background-color: #646464;
  text-align: center;
  padding: 20px
`;