import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/ProductContext.jsx'
import { FilterProductProvider } from './context/FilterProductContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FilterProductProvider>
        <CartContextProvider>
        <App />
        </CartContextProvider>
      </FilterProductProvider>
    </AppProvider>
  </React.StrictMode>
);
