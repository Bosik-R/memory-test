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
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 280px;
	padding: 10px;
	margin: 10px;
	background-color: #000000;
	color: #ffffff;
	border-radius: 15px;
`;

export const Message = styled.h1`
	color: #ffffff;
`;

export const Paragraph = styled.p`
	margin-bottom: 10px;
	padding: 0;
	color: #ffffff;
`;

export const HandleBtn = styled.button`
	padding: 8px 15px;
	font-size: 20px;
	border-radius: 15px;
	border: none;
	margin: 10px;
`;
