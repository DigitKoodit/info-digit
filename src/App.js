import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Date from './Date';
import Events from './Events';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Clock />
          </div>
          <div>
            <Date />
          </div>

          <h2>Digit Noice sivu</h2>
        </div>
        <div>
          <Events />
        </div>
        
        
      </div>
    );
  }
}

export default App;
