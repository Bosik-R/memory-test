import styled from 'styled-components';

export const AppContainer = styled.section`
	width: 100vw;
	height: 100vh;
	background-color: black;
	display: grid;
	place-items: center;
	position: relative;
`;

export const AppWrapper = styled.div`
	max-width: 900px;
	width: 100%;
	min-height: 400px;
	color: #ffffff;
	display: flex;
	`;

export const DisplayColumn = styled.div`
	width: 65%;
	background-color: #2b2734;
`;

export const StatsColumn = styled.div`
	width: 35%;
	background-color: #36006c;
`;
