import './App.scss';
import { useState } from 'react';

const App = () =>{
  

  return (
    <div className="App">
      <h1 className="title">can i drink?</h1>
      <form className="form">
        <input type="number" className="form__num-input" placeholder='enter your age'/>
        <button className="button">Check!</button>
      </form>
      <div className="output"></div>
    </div>
  );
}

export default App;
