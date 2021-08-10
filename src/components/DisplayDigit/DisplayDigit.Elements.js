import styled from 'styled-components';

export const DisplayDigitContainer = styled.section`
	display: grid;
	place-items: center;
	padding: 5px;
`;

export const DisplayDigitWrapper = styled.div`
	width: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 15px;
	color: ${({ disabled }) => (disabled ? '#9b9b9b' : '#ffffff')};
`;

export const DisplayLevel = styled.h1`
	width: 100%;
	color: inherit;
	margin: 0 0 20px 0;
	font-size: 30px;
	text-align: center;
`;

export const DisplayDigitValue = styled.div`
	width: 100px;
	height: 100px;
	color: inherit;
	border-radius: 10px;
	border: 1px solid #ffffff;
	background-color: #646464;
	display: grid;
	place-items: center;
	padding: 5px;
`;

export const DigitValue = styled.span`
	margin: 0;
	padding: 0;
	font-size: 70px;
	line-height: 70px;
	font-weight: bold;
`;
