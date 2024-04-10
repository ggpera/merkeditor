import styles from './Modal.module.css';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div className={styles.dialog}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
