import  { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

function updateScrollLock() {
  if (modalRoot.childElementCount > 0) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

export const Modal = ({ onClose, children }: IModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    updateScrollLock()
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      updateScrollLock()
    };
  }, [onClose]);

  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 bg-black/50"
      onClick={onBackdropClick}
    >
      <div className="max-w-calc{w-screen-48px} max-h-calc{h-screen-24px}">
        {children}
      </div>
    </div>,
    modalRoot
  );
};
