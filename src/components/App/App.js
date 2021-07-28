import React from 'react';
import HealthBar from '../HealthBar/HealthBar';
import * as S from './App.Elements';

const App = () => {
	return (
		<S.AppContainer>
			<S.AppWrapper>
				<HealthBar />
				Hello World
			</S.AppWrapper>
		</S.AppContainer>
	);
};

export default App;
