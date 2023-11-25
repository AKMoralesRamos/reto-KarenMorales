import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
/* import "./App.css" */

function UserInterface({ onNumberValue }) {
  const [numberValue, setNumberValue] = useState("");

  const handleCalculate = () => {
    onNumberValue(parseInt(numberValue, 10));
    setNumberValue("");
  };

  return (
    <div className="main">
      <h1>Calculadora para "n":</h1>
      <div className="container">
        <div className="serie-image"></div>
      </div>
      <h4>Instrucciones:</h4>
      <p>Introduce un valor para n y haz clic en Calcular.</p>
      <div>
        <InputGroup className="mb-3">
          <Form.Control
            type="number"
            placeholder="Ingresa un número"
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
          />
          <Button variant="dark" id="button-addon2" onClick={handleCalculate}>
            Calcular
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default UserInterface;
