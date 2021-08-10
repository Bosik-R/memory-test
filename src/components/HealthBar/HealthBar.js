import React from 'react';
import * as S from './HealthBar.Elements';

const HealthBar = ({ health }) => {
	const stringHealth = health.toString();
	return (
		<S.HealthBarContainer>
			<S.Icon />
			<S.HealthBar health={stringHealth}></S.HealthBar>
		</S.HealthBarContainer>
	);
};

export default HealthBar;
