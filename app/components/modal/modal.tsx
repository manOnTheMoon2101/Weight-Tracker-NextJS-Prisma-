'use client';

import React from 'react';
import './Modal.css';
import { ReactNode } from 'react';
interface MyComponentProps {
    isOpen: ReactNode;
    toggleModal: any;
    children: ReactNode;
  }
const Modal: React.FC<MyComponentProps> = ({ isOpen, toggleModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">

        <span className="close" onClick={toggleModal}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;