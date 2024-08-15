import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Optional service worker registration
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Measure performance or report web vitals (optional)
reportWebVitals(console.log);
