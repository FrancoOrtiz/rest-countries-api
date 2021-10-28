import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export { default as useThemeMode } from './useThemeMode';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);