import React, { useContext } from 'react';
import {
	ThemeProvider as MuiThemeProvider,
	createMuiTheme,
} from '@material-ui/core/styles';

import ThemeContext from './context/theme/ThemeContext';

const ThemeProvider = (props) => {
	const themeContext = useContext(ThemeContext);
	const { isDarkModeOn } = themeContext;

	const darkTheme = createMuiTheme({
		palette: {
			type: 'dark',
			background: {
				default: '#000',
			},
			primary: {
				main: '#6B9080',
			},
			component: {
				light: '#424242',
				dark: '#333',
			},
			income: { main: '#55A1E5' },
			expense: { main: '#ED6E85' },
			savings: { main: '#6CBDBE' },
			success: { main: '#6B9080' },
			error: { main: '#ED6E85' },
			warning: { main: '#F8CE6B' },
		},
		component: {
			outer: {
				borderRadius: '10px',
				backgroundColor: '#333',
			},
			inner: {
				margin: '10px',
				padding: '10px',
				borderRadius: '5px',
				backgroundColor: '#424242',
			},
		},
	});

	const lightTheme = createMuiTheme({
		palette: {
			type: 'light',
			background: {
				default: '#fff',
			},
			primary: {
				main: '#6B9080',
			},
			component: {
				light: '#EFEFEF',
				dark: '#E7E7E7',
			},
			income: { main: '#55A1E5' },
			expense: { main: '#ED6E85' },
			savings: { main: '#6CBDBE' },
			success: { main: '#6B9080' },
			error: { main: '#ED6E85' },
			warning: { main: '#F8CE6B' },
		},
		component: {
			outer: {
				borderRadius: '10px',
				backgroundColor: '#E7E7E7',
			},
			inner: {
				margin: '10px',
				padding: '10px',
				borderRadius: '5px',
				backgroundColor: '#EFEFEF',
			},
		},
	});

	return (
		<MuiThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
			{props.children}
		</MuiThemeProvider>
	);
};

export default ThemeProvider;
