import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import SignIn from './components/auth/SignIn';

import AuthState from './context/auth/AuthState';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AuthState>
          <SignIn />
        </AuthState>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
