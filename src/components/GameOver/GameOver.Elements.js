import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  z-index: 999;
`;

export const Content = styled.div`
  padding: 20px;
  margin: 10px;
  background-color: #000000;
`;

export const Title = styled.h1`
  color: #ffffff;
`;