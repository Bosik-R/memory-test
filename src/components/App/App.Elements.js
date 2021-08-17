import styled from 'styled-components';

export const AppContainer = styled.section`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		align-items: flex-start;
	}
`;

export const AppWrapper = styled.div`
	max-width: 800px;
	width: 100%;
	min-height: 400px;
	color: #ffffff;
	display: flex;
	position: relative;
	margin: 20px 10px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		margin: 0;
		height: 100vh;
	}
`;

export const DisplayColumn = styled.div`
	width: 68%;
	background-color: #2b2734;

	@media (max-width: 768px) {
		width: 100%;
		height: 68%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 20px;
	}
	@media (max-width: 425px) {
		height: 75%;
	}
`;

export const StatsColumn = styled.div`
	width: 32%;
	background-color: #36006c;
	display: flex;

	@media (max-width: 768px) {
		width: 100%;
		height: 32%;
	}
	@media (max-width: 425px) {
		height: 25%;
	}
`;
