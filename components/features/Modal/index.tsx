import { PropsWithChildren } from "react";

import s from "./Modal.module.scss";

interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) {
    return null;
  }

  return (
    <div className={s.modalOverlay}>
      <div className={s.modalContent}>
        <button className={s.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
