import { useState } from "react";
import "./App.css";
import CalculatorTotal from "./components/method";
import ResultModal from "./components/result";
import UserInterface from "./components/userInterface";

function App() {
  const [calculatedResult, setCalculatedResult] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [numberValue, setNumberValue] = useState("");

  const handleCalculate = (numberValue) => {
    const result = CalculatorTotal.calculatorFromN(numberValue);
    setCalculatedResult(result);
    setShowModal(true);
    setNumberValue(numberValue);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <UserInterface onNumberValue={handleCalculate} />
      {showModal && (
        <ResultModal
          result={calculatedResult}
          show={showModal}
          handleCloseModal={handleCloseModal}
          numberValue={numberValue}
        />
      )}
    </div>
  );
}

export default App;
