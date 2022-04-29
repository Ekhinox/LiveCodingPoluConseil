import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  function envoyer() {
    fetch('http://localhost:4000',{
      method: "POST",
      body: JSON.stringify({text})
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }
  return (
    <div className="App">
      <input type="text" onChange={event => setText(event.target.value)}/>
      <input type="Button" onClick={envoyer} value="envoyer"/>
    </div>
  );
}

export default App;