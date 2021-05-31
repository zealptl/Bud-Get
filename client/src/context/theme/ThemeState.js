import React, { useReducer } from 'react';
import ThemeContext from './ThemeContext';
import ThemeReducer from './ThemeReducer';
import { DARK_MODE_ON, DARK_MODE_OFF } from '../types';

const ThemeState = (props) => {
	const initialState = {
		isDarkModeOn: false,
	};

	const [state, dispatch] = useReducer(ThemeReducer, initialState);

	const turnDarkModeOn = () => dispatch({ type: DARK_MODE_ON });
	const turnDarkModeOff = () => dispatch({ type: DARK_MODE_OFF });

	return (
		<ThemeContext.Provider
			value={{
				isDarkModeOn: state.isDarkModeOn,
				turnDarkModeOn,
				turnDarkModeOff,
			}}
		>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeState;
