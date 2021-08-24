import styled from 'styled-components';
import { Sun } from '@styled-icons/evaicons-solid/Sun';
import { Moon } from '@styled-icons/evaicons-solid/Moon';

export const ThemeButton = styled.button`
	padding: 0;
	margin: 10px;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ darkTheme }) => (darkTheme ? '#12002b' : '#ffffff')};
	border-radius: 50px;
	border: 2px solid;
	border-color: ${({ darkTheme }) => (darkTheme ? '#ffffff' : '#12002b')};
	cursor: pointer;

	@media (max-width: 425px) {
		flex-direction: column;
		justify-content: center;
	}
`;

export const Slider = styled.div`
	position: absolute;
	width: 40px;
	height: 40px;
	top: 0;
	${({ darkTheme }) => (darkTheme ? 'left: 0' : 'right: 0')};
	border-radius: 50%;
	background-color: ${({ darkTheme }) => (darkTheme ? '#ffffff' : '#12002b')};
	transition: all 0.5s ease;
	z-index: 999;
	transition: all 0.5s ease;
	border: none;
`;

export const IconLight = styled(Sun)`
	width: 30px;
	color: #000000;
	margin: 5px 10px 5px 5px;

	@media (max-width: 425px) {
		margin: 5px 5px 10px 5px;
	}
`;

export const IconDark = styled(Moon)`
	width: 30px;
	color: #ffffff;
	margin: 5px 5px 5px 10px;

	@media (max-width: 425px) {
		margin: 10px 5px 5px 5px;
	}
`;
