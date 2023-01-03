import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const onBackdropClick = e => {
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

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };
