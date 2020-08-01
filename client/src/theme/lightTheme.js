import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#6B9080',
    },
    component: {
      light: '#E7E7E7',
      dark: '#EFEFEF',
    },
    background: '#FFFFFF',
    color: '#000000',
    income: '#55A1E5',
    expense: '#ED6E85',
    savings: '#6CBDBE',
  },
});

export default lightTheme;
