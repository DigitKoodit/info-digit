import React, { Component } from 'react';
import logo from './digit_logo.svg';
import './App.css';
import Clock from './Clock';
import Date from './Date';
import Events from './Events';

class App extends Component {
  render() {
    return (
      <div className="App vertical-flex-container" style={{border: 'solid thin'}}>
        <div className="horizontal-flex-container" style={{flex: 1, border: 'solid thin'}}>
          <div style={{flex: 1, border: 'solid thin', display: 'flex', justifyContent: 'left', paddingLeft: '1em'}}>
            <div>
              <img src={logo} alt="logo" style={{height: '100%'}}/>
            </div>
          </div>
          <div style={{flex: 1, display: 'flex', border: 'solid thin', justifyContent: 'center', alignContent: 'center', alignItems: 'center', fontSize: '3em'}}>
            <Date />
          </div>
          <div style={{flex: 1, display: 'flex', border: 'solid thin', justifyContent: 'center', alignContent: 'center', alignItems: 'center', fontSize: '5em'}}>
            <Clock />
          </div>
        </div>
        <div style={{flex: 1, display: 'flex', border: 'solid thin', justifyContent: 'center', alignContent: 'center', alignItems: 'center', fontSize: '5em'}}>
          INFORMAATIO SKRIINI
        </div>
        <div className="horizontal-flex-container" style={{flex: 3, border: 'solid thin'}}>
          <div style={{flex: 1, border: 'solid thin'}}></div>
          <div style={{flex: 1, border: 'solid thin'}}><Events /></div>
        </div>
        <div className="horizontal-flex-container" style={{flex: 3, border: 'solid thin'}}>
          <div style={{flex: 1, border: 'solid thin'}}></div>
          <div style={{flex: 1, border: 'solid thin'}}></div>
        </div>
      </div>
    );
  }
}

export default App;
