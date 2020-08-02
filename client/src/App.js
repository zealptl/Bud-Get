import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Item from './components/Item';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Item />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
