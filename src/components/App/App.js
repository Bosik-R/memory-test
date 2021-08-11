import React, { useReducer } from 'react';
import DisplayDigit from '../DisplayDigit/DisplayDigit';
import HealthBar from '../HealthBar/HealthBar';
import Sidebar from '../Sidebar/Sidebar';
import InputKeyboard from '../InputKeyboard/InputKeyboard';
import MessageModal from '../MessageModal/MessageModal';
import WelcomeView from '../WelcomeView/WelcomeView';
import { reducer } from '../../utils/reducer';
import { game } from '../../utils/initialState';
import * as S from './App.Elements';

const App = () => {
	const [state, dispatch] = useReducer(reducer, game);

	return (
		<S.AppContainer>
			<S.AppWrapper>
				{state.welcome && (
					<WelcomeView digits={state.digits} dispatch={dispatch} />
				)}
				{state.modal && <MessageModal {...state} dispatch={dispatch} />}
				<S.DisplayColumn>
					<HealthBar health={state.health} />
					<DisplayDigit {...state} dispatch={dispatch} />
					<InputKeyboard {...state} dispatch={dispatch} />
				</S.DisplayColumn>
				<S.StatsColumn>
					<Sidebar {...state} dispatch={dispatch} />
				</S.StatsColumn>
			</S.AppWrapper>
		</S.AppContainer>
	);
};

export default App;
