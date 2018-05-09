import * as React from 'react';
import './App.css';
import { Paintings } from './paintings/Paintings';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="mid-container">
          <Paintings />
        </div>
      </div>
    );
  }
}

export default App;
