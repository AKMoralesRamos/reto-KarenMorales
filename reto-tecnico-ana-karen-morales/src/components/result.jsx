import React from "react";
import Modal from "react-bootstrap/Modal";

class ResultModal extends React.Component {
  render() {
    const { result, show, handleClose } = this.props;
    console.log(result);

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Resultado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>El valor de la posición de "n" en la serie es: {result}</p>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ResultModal;
