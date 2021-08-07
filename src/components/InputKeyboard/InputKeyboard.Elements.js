import styled from 'styled-components';

export const InputKeyboardContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputKeyboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 500px;
  width: 100%;
  margin: 10px 15px;
`;

export const Btn = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 10px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  color: ${({disabled})=> (disabled ? '#9b9b9b' : '#ffffff')};
  background-color: #646464;
  margin: 10px;

  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
    padding: 10px;
    font-size: 25px;
  }
`;