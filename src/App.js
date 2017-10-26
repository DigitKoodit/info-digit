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
        <div className="container">
          <div className="logocontainer">
            <div className="logo"/>
            {/* <img src={logo} alt="logo" style={{minHeight: '100%', minWidth: '100%', height: 'auto', width: 'auto', margin: 'auto'}}/> */}
          </div>
          <div className="date">
            <Date />
            <Clock />
          </div>
          <div className="countdown">
            <Countdown date={moment('2018-5-1')} />
          </div>
          <div className="meetings">
            <Meetings />
          </div>
          <div className="calendar">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
