import { randomArray } from './randomArray';
import { game } from './initialState';

export const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.START_SEQUENCE:
			return {
				...state,
				start: true,
				sequence: randomArray(state.digits),
			};
		case ACTIONS.END_SEQUENCE:
			return {
				...state,
				start: false,
				disable: false,
			};
		case ACTIONS.GOOD_ANSWER:
			return {
				...state,
				value: action.payload,
				index: state.index + 1,
				answerArray: [...state.answerArray, action.payload],
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
				disable: true,
				index: 0,
			};
		case ACTIONS.BAD_ANSWER:
			return {
				...state,
				health: state.health - 1,
				disable: true,
				value: action.payload,
				modal: true,
			};
		case ACTIONS.RESTART_LEVEL:
			return {
				...state,
				value: '',
				answerArray: [],
				modal: false,
				index: 0,
			};
		case ACTIONS.RESET:
			return game;
		default:
			return state;
	}
};

export const ACTIONS = {
	RESET: 'reset',
	RESTART_LEVEL: 'restart_level',
	GOOD_ANSWER: 'show_value',
	BAD_ANSWER: 'end_round',
	END_GAME: 'end_game',
	VALUE: 'value',
	LEVEL_COMPLETED: 'level_completed',
	START_SEQUENCE: 'start_level',
	END_SEQUENCE: 'end_sequence',
};
