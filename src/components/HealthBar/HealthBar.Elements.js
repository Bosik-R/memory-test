import styled from 'styled-components';
import { Heart } from '@styled-icons/entypo/Heart';

export const HealthBarContainer = styled.section`
	display: flex;
	padding: 10px 20px;
	margin: 10px;
`;

export const Icon = styled(Heart)`
	color: #d90000;
	height: 20px;
	margin-right: 12px;
`;

export const HealthBar = styled.div`
	width: 150px;
	height: 16px;
	border: 2px solid #ffffff;
	border-radius: 10px;
	transition: all 0.5s ease;
	background: #009700;
	${({ health }) => {
		switch (health) {
			case '3':
				return `background: linear-gradient(90deg, #009700 100%);`;
			case '2':
				return `background: linear-gradient(90deg, #009700 66%, transparent 66%);`;
			case '1':
				return `background: linear-gradient(90deg, #009700 33%, transparent 33%);`;
			case '0':
				return `background: linear-gradient(90deg, #009700 0%, transparent 0%);`;
			default:
				return `background: linear-gradient(90deg, #009700 100%);`;
		}
	}}
`;
