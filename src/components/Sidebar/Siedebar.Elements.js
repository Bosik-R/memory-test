import styled from 'styled-components';

export const SidebarContainer = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export const StartBtn = styled.button`
	font-size: 50px;
	padding: 10px 30px;
	margin: 10px;
	text-align: center;
	background-color: ${({ play }) => (play ? '#727272' : '#27b62f')};
	color: ${({ play }) => (play ? '#000000' : '#ffffff')};
	color: #ffffff;
	border: 1px solid #ffffff;
	border-radius: 10px;
	transition: all 0.5s ease;
	cursor: pointer;
`;
