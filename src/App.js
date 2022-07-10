import './App.scss';
import { useState } from 'react';

const App = () =>{
  const [age, setAge] = useState(Number());
  const [outputContent, setOutputContent] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if(age < 18) setOutputContent('No 👶')
    if(age < 25) setOutputContent('Not in the USA 😇')
    if(age >= 25) setOutputContent('Yes 🍻')
  }
  return (
    <div className="App">
      <h1 className="title">can i drink?</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input type="number" className="form__num-input" placeholder='enter your age' value={age} onChange = {(e) => setAge(e.target.value)}/>
        <button className="button">Check!</button>
      </form>
      <div className="output">{outputContent}</div>
    </div>
  );
}

export default App;
