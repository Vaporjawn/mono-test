import React from 'react';
import logo from './logo.svg';
import './App.css';
// const proxy = "http://localhost:8000"
let test;
const check = async() => await fetch('/check').then(res => res.json())
.then(res => console.log(res));
check();
console.log(check());
console.log(test);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
