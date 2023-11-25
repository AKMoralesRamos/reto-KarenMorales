import Modal from "react-bootstrap/Modal";

function ResultModal({ result, show, handleCloseModal, numberValue }) {
  return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Resultado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          El valor de la posición de "n = {numberValue}" en la serie es:{" "}
          {result}
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default ResultModal;