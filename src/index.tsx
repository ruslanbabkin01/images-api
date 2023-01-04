import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { App } from './components/App';
import './index.css';
import { ModalState } from 'context/ModalContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ModalState>
    <App />
  </ModalState>
);

//     <React.StrictMode>
// </React.StrictMode>
