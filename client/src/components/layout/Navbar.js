import React, { Fragment, useContext, useEffect } from 'react';
import {
	AppBar,
	FormControlLabel,
	Switch,
	Toolbar,
	makeStyles,
	Typography,
	Button,
	withStyles,
} from '@material-ui/core';
import { ExitToAppRounded as ExitToAppRoundedIcon } from '@material-ui/icons';
import { DRAWER_WIDTH } from '../../utils/constants';

import AuthContext from '../../context/auth/AuthContext';
import ThemeContext from '../../context/theme/ThemeContext';

const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.primary.main,
		flexGrow: 1,
		width: `calc(100% - ${DRAWER_WIDTH}px)`,
		marginLeft: DRAWER_WIDTH,
	},
	userGreeting: {
		marginRight: theme.spacing(3),
	},
	logoutIcon: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const CustomSwitch = withStyles({
	switchBase: {
		color: '#525252',
		'&$checked': {
			color: '#333',
		},
		'&$checked + $track': {
			backgroundColor: '#333',
		},
	},
	checked: {},
	track: {},
})(Switch);

const Navbar = ({ heading }) => {
	const classes = useStyles();

	const authContext = useContext(AuthContext);
	const { isAuthenticated, loading, user, loadUser, signOutUser } = authContext;

	const themeContext = useContext(ThemeContext);
	const { turnDarkModeOn, turnDarkModeOff } = themeContext;

	const handleThemeChange = (e) => {
		e.target.checked ? turnDarkModeOn() : turnDarkModeOff();
	};

	useEffect(() => {
		loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h4' className={classes.title}>
						{heading}
					</Typography>

					<FormControlLabel
						control={<CustomSwitch />}
						label='Dark Mode'
						onChange={handleThemeChange}
					/>

					<Typography variant='h6' className={classes.userGreeting}>
						Hello {user && user.firstName}
					</Typography>

					<Button
						color='inherit'
						onClick={signOutUser}
						startIcon={<ExitToAppRoundedIcon />}
					>
						SignOut
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
