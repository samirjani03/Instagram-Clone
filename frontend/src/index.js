import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

console.log('React index.js is running');

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('Root element:', document.getElementById('root'));
console.log('Creating React root...');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('React app should be rendered now');