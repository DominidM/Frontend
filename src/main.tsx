import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'; 
import './styles/index.css';
import { CartProvider } from './components/ui/CartContext'; // Importa el proveedor

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
      
      </BrowserRouter>
    </React.StrictMode>
  );
}
