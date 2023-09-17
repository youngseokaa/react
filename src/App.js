import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';




function App() {

  var num = 1;

  function numUp(){
    num = num + 1;
    console.log(num);
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>{ num }</div>
        <button onClick={() => {numUp()}}>버튼</button>
      </header>
    </div>
  );
}

export default App;
