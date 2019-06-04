import React from 'react';
import logo from './logo.svg';
import './App.css';

function doSome() {
  alert('you clicked me!')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={doSome}>click me</button>
      </header>
    </div>
  );
}

export default App;
