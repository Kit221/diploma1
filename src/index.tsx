import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/**
 * Точка входа в приложение.
 * Рендерит корневой компонент App в DOM.
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);