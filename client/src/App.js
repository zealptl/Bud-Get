import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import ThemeProvider from './ThemeProvider';
import PrivateRoute from './routing/PrivateRoute';
import Alerts from './components/layout/Alerts';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/pages/dashboard/Dashboard';
import QuickAdd from './components/pages/quickAdd/QuickAdd';
import Income from './components/pages/income/Income';
import Expense from './components/pages/expense/Expense';
import Trends from './components/pages/trends/Trends';
import Wishlist from './components/pages/wishlist/Wishlist';

import setAuthToken from './utils/setAuthToken';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import ThemeState from './context/theme/ThemeState';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<ThemeState>
			<ThemeProvider>
				<CssBaseline>
					<AuthState>
						<AlertState>
							<Router>
								<Fragment>
									<div className='container'>
										<Alerts />
										<Switch>
											<PrivateRoute exact path='/' component={Dashboard} />
											<Route exact path='/quickadd' component={QuickAdd} />
											<Route exact path='/income' component={Income} />
											<Route exact path='/expense' component={Expense} />
											<Route exact path='/trends' component={Trends} />
											<Route exact path='/wishlist' component={Wishlist} />
											<Route exact path='/signup' component={SignUp} />
											<Route exact path='/signin' component={SignIn} />
										</Switch>
									</div>
								</Fragment>
							</Router>
						</AlertState>
					</AuthState>
				</CssBaseline>
			</ThemeProvider>
		</ThemeState>
	);
};

export default App;
