import { createMuiTheme } from 'material-ui';
import { teal, pink } from 'material-ui/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[600],
      contrastText: '#fff'
    },
    secondary: {
      main: pink[800],
      contrastText: '#fff'
    }
  }
});
