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
      light: '#444',
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
      margin: '10px',
      borderRadius: '20px',
      padding: '10px',
      backgroundColor: '#333',
    },
    inner: {
      margin: '5px',
      borderRadius: '5px',
      padding: '10px',
      backgroundColor: '#444',
    },
  },
});

export default theme;
