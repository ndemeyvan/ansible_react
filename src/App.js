import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Test project deploiement with ansible</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> site 5.
        </p>
      </div>
    );
  }
}

export default App;
