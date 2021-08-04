import React, { useReducer, useState } from 'react';
import DisplayDigit from '../DisplayDigit/DisplayDigit';
import HealthBar from '../HealthBar/HealthBar';
import Sidebar from '../Sidebar/Sidebar';
import * as S from './App.Elements';
import InputKeyboard from './InputKeyboard/InputKeyboard';

export const ACTIONS = {
	GOOD_VALUE: 'show_value',
	BAD_VALUE: 'end_sequence',
	END_GAME: 'end_game',
	LEVEL_COMPLETED: 'level_completed',
	START_SEQUENCE: 'start_level',
	END_SEQUENCE: 'end_sequence',
};

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.START_SEQUENCE:
			return {
				...state,
				start: true,
				sequence: action.payload.sequence,
				success: false,
				answering: true,
			};
		case ACTIONS.END_SEQUENCE:
			return {
				...state,
				start: false,
				disable: false,
			};
		case ACTIONS.GOOD_VALUE:
			return {
				...state,
				value: action.payload,
				answerArray: [...state.answerArray, action.payload],
			};
		case ACTIONS.BAD_VALUE:
			return {
				...state,
				start: false,
				answerArray: [],
				answer: false,
				sequence: [],
			};

		case ACTIONS.LEVEL_COMPLETED:
			return {
				...state,
				value: '',
				answerList: [...state.answerList, state.answerArray],
				score: state.score + state.digits,
				answerArray: [],
				digits: state.digits + 1,
				level: state.level + 1,
				success: true,
			};

		default:
			return state;
	}
}

const game = {
	value: null,
	disable: true,
	health: 3,
	level: 1,
	digits: 3,
	start: false,
	answerArray: [],
	answer: true,
	sequence: [4, 5, 6],
	answerList: [],
	score: 0,
	success: false,
	answering: false,
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, game);
	console.log(state);

	return (
		<S.AppContainer>
			<S.AppWrapper>
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
