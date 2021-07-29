import React from 'react';
import * as S from './HealthBar.Elements';

const HealthBar = ({ health }) => {
	return (
		<S.HealthBarContainer>
			<S.Icon />
			<S.HealthBar health={health}></S.HealthBar>
		</S.HealthBarContainer>
	);
};

export default HealthBar;
