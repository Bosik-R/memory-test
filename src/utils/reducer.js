export const reducer = (state, action) => {
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
			console.log('good value');
			return {
				...state,
				value: action.payload,
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
				success: true,
			};
		case ACTIONS.BAD_VALUE:
			console.log('value działa');
			return {
				...state,
				health: state.health - 1,
			}
		default:
			return state;
	}
};

export const ACTIONS = {
	GOOD_VALUE: 'show_value',
	BAD_VALUE: 'end_round',
	END_GAME: 'end_game',
	VALUE: 'value',
	LEVEL_COMPLETED: 'level_completed',
	START_SEQUENCE: 'start_level',
	END_SEQUENCE: 'end_sequence',
};
