import React from 'react';
import * as S from './HealthBar.Elements';

const HealthBar = () => {
	return (
		<S.HealthBarWrapper>
			<S.Icon />
			<S.HealthBar health={'2'}></S.HealthBar>
		</S.HealthBarWrapper>
	);
};

export default HealthBar;
