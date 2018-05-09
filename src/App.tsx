import * as React from 'react';
import { Paintings } from './paintings/Paintings';
import { Grid, AppBar, Toolbar, Typography } from 'material-ui';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Hkure Gallery
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="container">
          <Grid container justify="center">
            <Grid item xs={12} sm={8} lg={6}>
              <Paintings />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
