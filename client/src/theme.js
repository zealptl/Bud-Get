import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#000',
    },
    primary: {
      main: '#6B9080',
    },
    component: {
      light: '#424242',
      dark: '#333',
    },
    income: { main: '#55A1E5' },
    expense: { main: '#ED6E85' },
    savings: { main: '#6CBDBE' },
    success: { main: '#6B9080' },
    error: { main: '#ED6E85' },
    warning: { main: '#F8CE6B' },
  },
  component: {
    outer: {
      borderRadius: '10px',
      backgroundColor: '#333',
    },
    inner: {
      margin: '10px',
      padding: '10px',
      borderRadius: '5px',
      backgroundColor: '#424242',
    },
  },
});

export default theme;
