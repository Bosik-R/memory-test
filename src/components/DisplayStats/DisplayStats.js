import React from 'react';
import * as S from './DisplayStats.Elements';

const DisplayStats = ({ title, value }) => {
	return (
		<S.StatsWrapper>
			<S.StatsTitle>{title}</S.StatsTitle>
			<S.StatsCircle>
				<S.StatsValue>{value}</S.StatsValue>
			</S.StatsCircle>
		</S.StatsWrapper>
	);
};

export default DisplayStats;
