import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import darkTheme from './theme/darkTheme';
import lightTheme from './theme/lightTheme';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <h1>Hello World</h1>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
