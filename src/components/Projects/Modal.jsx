import React from 'react';
import styles from './Modal.module.css'; // You can create a new CSS module for modal styling

const Modal = ({ title, description, closeModal }) => {
  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeModal}>X</button>
        <h3 className={styles.modalTitle}>{title}</h3>
        <p className={styles.modalDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Modal;
