import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
	SIGNUP_SUCCESS,
	SIGNUP_FAIL,
	SIGNIN_SUCCESS,
	SIGNIN_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	SIGNOUT,
	CLEAR_ERROR,
} from '../types';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}

		try {
			const res = await axios.get('/api/auth');
			dispatch({ type: USER_LOADED, payload: res.data });
		} catch (error) {
			dispatch({ type: AUTH_ERROR });
		}
	};

	const signUpUser = async (formData) => {
		const config = {
			headers: { 'Content-Type': 'application/json' },
		};

		try {
			const res = await axios.post('/api/users', formData, config);
			dispatch({ type: SIGNUP_SUCCESS, payload: res.data });

			loadUser();
		} catch (error) {
			dispatch({ type: SIGNUP_FAIL, payload: error.response.data.msg });
		}
	};

	const signInUser = async (formData) => {
		const config = {
			headers: { 'Content-Type': 'application/json' },
		};

		try {
			const res = await axios.post('/api/auth', formData, config);
			dispatch({ type: SIGNIN_SUCCESS, payload: res.data });
			loadUser();
		} catch (error) {
			dispatch({ type: SIGNIN_FAIL, payload: error.response.data.msg });
		}
	};

	const signOutUser = () => dispatch({ type: SIGNOUT });

	const clearErrors = () => dispatch({ type: CLEAR_ERROR });

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.token,
				loading: state.loading,
				user: state.user,
				error: state.error,
				loadUser,
				signUpUser,
				signInUser,
				signOutUser,
				clearErrors,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
