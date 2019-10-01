import React from 'react';
import { Button } from './components/Button/index.js';
import './App.css';
import Chronometer from './components/Chronometer/index.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Chronometer onClick={() => console.log("clic")} label="Cliquez moi !"/>     
      </header>
    </div>
  );
}



export default App;
