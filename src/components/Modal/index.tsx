import { Component, useEffect, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isModalOpen: boolean;
  setModalOpen: () => void;
  children: React.ReactNode;
}

export function Modal({ isModalOpen, setModalOpen, children }: ModalProps) {
  const [modalStatus, setModalStatus] = useState<boolean>(isModalOpen)

  useEffect( () => {
    if (isModalOpen !== modalStatus) {
      setModalStatus(isModalOpen);
    }
  }, [isModalOpen, modalStatus])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setModalOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};