import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Sandbox from './Sandbox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        A revival of <strong>Stellar</strong> in React.js explore emergent dynamics
        </p>
        <a
          className="App-link"
          href="https://jaysilvas.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Projects
        </a>
      </header>
      <Sandbox />
    </div>
  );
}

export default App;
