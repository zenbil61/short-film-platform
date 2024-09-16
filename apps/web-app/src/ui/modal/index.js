'use client';
import React from 'react';
import './index.scss'; // Modal için stilleri buraya ekleyin
import Button from '@/ui/button';
const Modal = ({
  hideFooter,
  className = '',
  onClose,
  onSuccess,
  title,
  children,
  footer
}) => {
  return (
    <div>
      <div className={`modal ${className}`} onClick={onClose}>
        <div className='modal-wrapper' onClick={(e) => e.stopPropagation()}>
          <div className='modal-header'>
            <span className='close' onClick={onClose}>
              &times;
            </span>
            <h3 className='modal-header-title'>{title}</h3>
          </div>
          <div className='modal-content'> {children}</div>
          {footer && <div className='modal-footer'> {footer}</div>}
          {!footer && !hideFooter && (
            <Modal.Footer>
              <Button onClick={onClose}>Vazgeç</Button>
              <Button onClick={onSuccess}>Kaydet</Button>
            </Modal.Footer>
          )}
        </div>
      </div>
    </div>
  );
};

Modal.Footer = ({ children, ...props }) => {
  return (
    <div className='modal-footer' {...props}>
      {children}
    </div>
  );
};

export default Modal;
