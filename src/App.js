import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to DnD Reaction</h1>
        </header>
        <p className="App-intro">
          A Dungeon Master's companion built with<code> React.js </code>and<code> Electron </code>
        </p>
      </div>
    );
  }
}

export default App;
