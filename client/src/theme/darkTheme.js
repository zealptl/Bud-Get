import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#6B9080',
    },
    component: {
      light: '#444444',
      dark: '#333333',
    },
    background: '#000000',
    color: '#FFFFFF',
    income: '#55A1E5',
    expense: '#ED6E85',
    savings: '#6CBDBE',
  },
});

export default darkTheme;
