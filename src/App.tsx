import * as React from 'react';
import { Paintings } from './paintings/Paintings';
import { AppBar, Toolbar, Typography, MuiThemeProvider } from 'material-ui';
import { theme } from './styles/theme';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="app">
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Henriette Kure Gallery
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="container">
            <Paintings />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
