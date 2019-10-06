import React from 'react';
import logo from './logo.svg';
import './App.css';

const head = require('./img/loan_app_status.png');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={head} className="App-logo" alt="head"/>
      </header>

      <div className="Body">
        <h1>test  </h1>
      </div>
    </div>
  );
}

export default App;