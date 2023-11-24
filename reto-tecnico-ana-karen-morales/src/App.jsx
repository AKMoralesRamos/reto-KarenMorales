import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./App.css";
import { calculatorTotal } from "./components/calculatorTotal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      errorMessage: null,
    };
    this.inputRef = React.createRef();
  }

  handleCalcular = () => {
    const inputValue = parseInt(this.inputRef.current.value, 10);

    if (!isNaN(inputValue)) {
      console.log(inputValue);
      const result = calculatorTotal(inputValue);
      this.setState({ result, errorMessage: null });
    } else {
      this.setState({ errorMessage: "Por favor, ingresa un número válido.", result: null });
    }
  };

  render() {
    return (
      <div>
        <h1>Calculadora de serie</h1>
        <p>Introduce un valor para n y haz clic en Calcular.</p>
        <div>
          <InputGroup className="mb-3">
            <Form.Control
              ref={this.inputRef}
              type="number"
              min="1"
              placeholder="Ingresa un número"
            />
            <Button
              variant="dark"
              id="button-addon2"
              onClick={this.handleCalcular}
            >
              Calcular
            </Button>
          </InputGroup>
          {this.state.errorMessage && (
            <p style={{ color: "red" }}>{this.state.errorMessage}</p>
          )}
          {this.state.result !== null && (
            <p>El resultado es: {this.state.result}</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;

