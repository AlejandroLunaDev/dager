import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  iframeSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, iframeSrc }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose(); // Cierra el modal cuando se hace clic fuera de él
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside); // Limpiar el evento cuando el modal se cierre
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div ref={modalRef} className={styles.modalContent}>
        <iframe
          src={iframeSrc}
          allowFullScreen
          className={styles.modalIframe}
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
