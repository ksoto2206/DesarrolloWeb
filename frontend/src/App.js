import { useState } from 'react';
import logo from './2056977.svg';
import './App.css';
import PrimerFormulario from './componentes/PrimerFormulario';
import Inmobiliaria from './componentes/index';

function App() {
  var[nombre]=useState()
  function click(){
    console.log(nombre)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

      <div>
        <Inmobiliaria />
      </div>
    </div>
  );
}

export default App;