import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './contexts/CartContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import TestCartContext from './contexts/TestCartContext';
// import { UserContextProvider } from './contexts/UserContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
 
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TestCartContext>
          <App />
        </TestCartContext>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
