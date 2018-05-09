import { createMuiTheme } from 'material-ui';
import { pink, teal } from 'material-ui/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[700],
      contrastText: '#fff'
    },
    secondary: {
      main: pink[700],
      contrastText: '#fff'
    }
  }
});
