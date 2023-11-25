import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./App.css";
import ResultModal from "./components/result";
import { calculatorTotal } from "./components/calculatorTotal";
/* import MiComponente from "./components/image"; */
/* import image from "../public/serieN.JPG"; */

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
      this.setState({
        result,
        errorMessage: null,
        showModal: true,
        handleCloseModal: true,
      });
    } else {
      this.setState({
        errorMessage: "Por favor, ingresa un número válido.",
        result: null,
      });
    }
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <h1>Calculadora de serie</h1>
      {/*   <div>
          <MiComponente></MiComponente>
        </div> */}
        <h4>Instrucciones:</h4>
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
            <ResultModal
              result={this.state.result}
              show={this.state.showModal}
              handleClose={this.handleCloseModal}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
