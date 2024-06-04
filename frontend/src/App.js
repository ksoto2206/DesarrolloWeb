import { useState } from 'react';
import logo from './2056977.svg';
import './App.css';
import {Form, Button, Col, Row } from 'react-bootstrap'

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
      <Row>
        <Col>
        <Form.Label>Martes 04</Form.Label>
        </Col>
        <Col>
        <Form.Control value={nombre}></Form.Control>
        </Col>
        <Col>
        <Button onClick={click}>ok</Button>
        </Col>
      </Row>
    </div>
  );
}

export default App;
