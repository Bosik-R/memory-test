import React, { useReducer, useState } from 'react';
import DisplayDigit from '../DisplayDigit/DisplayDigit';
import HealthBar from '../HealthBar/HealthBar';
import * as S from './App.Elements';
import InputKeyboard from './InputKeyboard/InputKeyboard';

export const ACTIONS = {
	GOOD_VALUE: 'show_value',
	BAD_VALUE: 'end_sequence',
	END_GAME: 'end_game',
	LEVEL_COMPLETED: 'level_completed',
}

function reducer(state, action){
	switch (action.type) {
		case ACTIONS.GOOD_VALUE:
			return { 
				...state, 
				value: action.payload, 
				answerArray: [...state.answerArray, action.payload] 
			};
		case ACTIONS.BAD_VALUE:
			console.log('działa');
			return {...state, start: false, answerArray: [], answer: false, sequence:[]};
		
		case ACTIONS.LEVEL_COMPLETED:
			return {
				...state,
				value: '',
				answerList: [...state.answerList, state.answerArray],
				score: state.score + state.level,
				answerArray: [],
			}

		default:
			return state;
	}

};

const game = {
	value: null,
	disable: false,
	health: 3,
	level: 3,
	start: false,
	answerArray: [],
	answer: true,
	sequence: [4, 5, 6],
	answerList: [],
	score: 0,
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, game)
	console.log(state);

	return (
		<S.AppContainer>
			<S.AppWrapper>
				<HealthBar health={state.health}/>
				<DisplayDigit level={state.level} value={state.value} />
				<InputKeyboard {...state} dispatch={dispatch}/>
			</S.AppWrapper>
		</S.AppContainer>
	);
};

export default App;
