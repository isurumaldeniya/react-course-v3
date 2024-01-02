import { useGlobalContext } from './AppContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Model = () => {
  const { isModelOpen, setIsModelOpen } = useGlobalContext();

  return (
    <Modal size="lg" centered show={isModelOpen}>
      <Modal.Header closeButton onClick={() => setIsModelOpen(false)}>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>This is a Model</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setIsModelOpen(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Model;
