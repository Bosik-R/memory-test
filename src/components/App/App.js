import React, { useReducer, useContext, useState } from 'react';
import DisplayDigit from '../DisplayDigit/DisplayDigit';
import HealthBar from '../HealthBar/HealthBar';
import Sidebar from '../Sidebar/Sidebar';
import InputKeyboard from '../InputKeyboard/InputKeyboard';
import MessageModal from '../MessageModal/MessageModal';
import WelcomeView from '../WelcomeView/WelcomeView';
import { reducer } from '../../utils/reducer';
import { game } from '../../utils/initialState';
import * as S from './App.Elements';
import { ThemeContext } from '../../utils/ThemeContext';
import ThemeButton from '../ThemeButton/ThemeButton';

const App = () => {
	const [state, dispatch] = useReducer(reducer, game);
	const theme = useContext(ThemeContext);
	const [darkTheme, setDarkTheme] = useState(true);

	return (
		<ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
			<S.AppContainer>
				<S.AppWrapper>
					{state.welcome && <WelcomeView digits={state.digits} dispatch={dispatch} />}
					{state.modal && <MessageModal {...state} dispatch={dispatch} />}
					<S.DisplayColumn>
						<S.ThemeButtonWrapper>
							<ThemeButton />
						</S.ThemeButtonWrapper>
						<HealthBar health={state.health} />
						<DisplayDigit {...state} dispatch={dispatch} />
						<InputKeyboard {...state} dispatch={dispatch} />
					</S.DisplayColumn>
					<S.StatsColumn>
						<Sidebar {...state} dispatch={dispatch} />
					</S.StatsColumn>
				</S.AppWrapper>
			</S.AppContainer>
		</ThemeContext.Provider>
	);
};

export default App;
