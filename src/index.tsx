import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import './index.css';
import { App } from 'App';
import { ModalProvider } from 'context/useModalContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
