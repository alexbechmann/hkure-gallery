import * as React from 'react';
import { PaintingsConnected } from './paintings/PaintingsConnected';
import { AppBar, Toolbar, Typography, MuiThemeProvider } from 'material-ui';
import { theme } from './styles/theme';
import { store } from 'shared/root.store';
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
              <PaintingsConnected />
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
