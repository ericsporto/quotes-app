import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './global.css';
import App from './App.tsx';
import ReactQueryProvider from '@providers/ReactQueryProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      theme="colored"
      hideProgressBar
    />
    <ReactQueryProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ReactQueryProvider>
  </BrowserRouter>
);
