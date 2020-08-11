import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

import Alerts from './components/layout/Alerts';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';

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
