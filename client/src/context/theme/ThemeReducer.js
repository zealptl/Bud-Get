import { DARK_MODE_ON, DARK_MODE_OFF } from '../types';

export default (state, action) => {
	switch (action.type) {
		case DARK_MODE_ON:
			return {
				...state,
				isDarkModeOn: true,
			};

		case DARK_MODE_OFF:
			return {
				...state,
				isDarkModeOn: false,
			};

		default:
			return state;
	}
};
