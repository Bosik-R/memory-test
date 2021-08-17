import styled from 'styled-components';

export const SidebarContainer = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: row;
		//justify-content: center;
		justify-content: space-around;
		align-items: center;
	}
	/* @media (max-width: 425px) {
		flex-direction: column;
		justify-content: space-around;
	} */
`;
export const StatsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: row;
	}
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
	border-radius: 20px;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		${({ play }) => (play ? '' : 'border-color: #ff8000;')};
	}

	&:focus-visible {
		
	}

	@media (max-width: 768px) {
		font-size: 40px;
		padding: 6px 50px;
	}

	@media (max-width: 425px) {
		font-size: 25px;
		padding: 15px;
	}

`;

