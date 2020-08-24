import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

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

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AuthState>
          <AlertState>
            <Router>
              <Fragment>
                <div className='container'>
                  <Alerts />
                  <Switch>
                    <Route exact path='/' component={Dashboard} />
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
  );
};

export default App;
