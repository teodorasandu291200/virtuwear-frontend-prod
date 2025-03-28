import React from 'react';   // Import React
import ReactDOM from 'react-dom/client';  // Import ReactDOM
import './index.css';
import './tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();