import styled from 'styled-components';

export const StatsWrapper = styled.div`
	width: 100%;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	color: #ffffff;

	@media (max-width: 425px) {
		padding: 5px;
		margin: 0 10px;
	}
`;

export const StatsTitle = styled.span`
	font-size: 40px;
	margin-bottom: 10px;

	@media (max-width: 425px) {
		font-size: 18px;
	}
`;

export const StatsCircle = styled.div`
	width: 60px;
	height: 60px;
	padding: 10px;
	display: grid;
	place-items: center;
	border-radius: 50%;
	border: 1px solid #ffffff;
	background-color: #646464;

	@media (max-width: 425px) {
		width: 35px;
		height: 35px;
		padding: 5px;
	}
`;

export const StatsValue = styled.span`
	font-size: 35px;
	line-height: 35px;
	padding: 0;
	margin: 0;

	@media (max-width: 425px) {
		font-size: 15px;
		line-height: 15px;
	}
`;
