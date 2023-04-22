import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { App } from './App';
import './index.css';
import { ModalProvider } from 'context/useModalContext';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
