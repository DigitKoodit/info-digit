import React, { Component } from 'react';
import logo from './digit_logo.svg';
import './App.css';
import Clock from './Clock';
import Date from './Date';
import Countdown from './Countdown';
import Meetings from './Meetings';
import moment from 'moment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={logo} alt="logo" style={{height: 100}}/>
          <Date />
          <Clock />
        </div>
        <div className="countdown">
          <Countdown date={moment('2018-5-1')} />
        </div>
        <div className="meetings">
          <Meetings />
        </div>
      </div>
    );
  }
}

export default App;
