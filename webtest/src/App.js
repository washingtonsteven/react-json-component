import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JSONComponent from 'react-json-component';

class App extends Component {
  componentDidCatch(e) {
    console.error(e);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <JSONComponent jsonSrc={{type:'div', props:{'data-json':true}, children:"JSON component!"}} />
      </div>
    );
  }
}

export default App;
