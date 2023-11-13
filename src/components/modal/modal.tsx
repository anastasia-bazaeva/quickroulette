import ReactDOM from 'react-dom';
import { ReactElement, useEffect } from "react";
import ModalOverlay from "./modal-overlay";
import modalStyles from './modal.module.css';

interface IModal {
  onClose: () => void;
  children?: ReactElement | ReactElement[];
}

 const Modal = ({ onClose, children }:IModal) => {
  const modalsContainer = document.querySelector('#modals') as Element;

  const handleEscKeydown = (event: KeyboardEvent) => {
    event.key === "Escape" && onClose();
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscKeydown);

    return () => {
      document.removeEventListener('keydown', handleEscKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={modalStyles.window}>
        <button className={modalStyles.button} onClick={onClose}></button>
        {children}
      </div>
      <ModalOverlay onClick={onClose} />
    </>,
    modalsContainer
  );
}

export default Modal