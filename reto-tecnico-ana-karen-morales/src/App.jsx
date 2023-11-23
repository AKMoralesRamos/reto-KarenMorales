import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./App.css";

class App extends React.Component {
  
 /*  handleCalcular = () => {

  } */

  render() {
    return (
      <div>
        <h1>Calculadora de serie</h1>
        <p>Introduce un valor para 'n' y haz click en 'Calcular'.</p>
        <div>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Ingresa un número"
            />
            <Button variant="dark" id="button-addon2"/*  onClick={handleCalcular} */>
              Calcular
            </Button>
          </InputGroup>
        </div>
      </div>
    );
  }
}

export default App;
