import styled from 'styled-components';

export const Wrapper = styled.section`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: grid;
	place-items: center;
	background-color: rgba(95, 37, 111, 0.9);
	z-index: 999;
`;

export const Content = styled.div`
	min-width: 240px;
	margin: 10px;
	padding: 20px;
	border-radius: 15px;
	background-color: #000000;
	color: #ffffff;
	display: flex;
	flex-direction: column;
`;

export const Row = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Title = styled.h1``;

export const Paragraph = styled.p``;

export const Image = styled.img`
	margin-bottom: -4px;
`;

export const Col = styled.div``;

export const Span = styled.span`
	margin-right: 10px;
`;

export const DigitLength = styled.input`
	width: 35px;
	padding: 5px 0px 5px 10px;
`;

export const Btn = styled.button`
	padding: 10px 25px;
	margin: 15px;
	border: none;
	border-radius: 15px;
	cursor: pointer;
	transition: all 0.5s ease;

	&:hover {
		background-color: #008800;
		color: #ffffff;
	}
`;
