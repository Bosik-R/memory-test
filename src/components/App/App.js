import React, { useReducer } from 'react';
import DisplayDigit from '../DisplayDigit/DisplayDigit';
import HealthBar from '../HealthBar/HealthBar';
import Sidebar from '../Sidebar/Sidebar';
import * as S from './App.Elements';
import InputKeyboard from '../InputKeyboard/InputKeyboard';
import { reducer } from '../../utils/reducer';
import { game } from '../../utils/initialState';
import MessangeModal from '../MessageModal/MessangeModal';

const App = () => {
	const [state, dispatch] = useReducer(reducer, game);

	return (
		<S.AppContainer>
			<S.AppWrapper>
				{state.modal && <MessangeModal {...state} dispatch={dispatch} />}
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
