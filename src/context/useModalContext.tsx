import { createContext, useState, useContext } from 'react';

interface IModalContext {
  largeImage: string;
  openModal: (image: string) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
  largeImage: '',
  openModal: () => {},
  closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [largeImage, setlargeImage] = useState('');

  const openModal = (image: string) => setlargeImage(image);
  const closeModal = () => setlargeImage('');

  return (
    <ModalContext.Provider value={{ openModal, closeModal, largeImage }}>
      {children}
    </ModalContext.Provider>
  );
};
