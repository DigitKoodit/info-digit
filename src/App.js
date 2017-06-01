import React, { Component } from 'react';
import logo from './digit_logo.svg';
import './App.css';
import Clock from './Clock';
import Date from './Date';
import Countdown from './Countdown';
import moment from 'moment';

class App extends Component {
  render() {
    return (
      <div className="App vertical-flex-container" style={{backgroundColor: '#D4B16A'}}>
        <div className="horizontal-flex-container" style={{flex: 1, borderBottom: 'solid thin', padding: '0.5em 1em', backgroundColor: '#FFE3AA'}}>
          <div style={{flex: 1, display: 'flex', justifyContent: 'left'}}>
            <div>
              <img src={logo} alt="logo" style={{height: '100%'}}/>
            </div>
          </div>
          <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', fontSize: '3em'}}>
            <Date />
          </div>
          <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end', alignContent: 'center', alignItems: 'center', fontSize: '5em'}}>
            <Clock />
          </div>
        </div>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', borderBottom: 'solid thin', justifyContent: 'center', alignContent: 'center', alignItems: 'center', fontSize: '3em', backgroundColor: '#AA8439', color: 'white'}}>
          <div>Wappuun on</div>
          <Countdown date={moment('2018-5-1')} />
        </div>
        <div className="horizontal-flex-container" style={{flex: 3}}>
          <div style={{flex: 1}}></div>
          <div style={{flex: 1}}></div>
        </div>
        <div className="horizontal-flex-container" style={{flex: 3}}>
          <div style={{flex: 1}}></div>
          <div style={{flex: 1}}></div>
        </div>
      </div>
    );
  }
}

export default App;
