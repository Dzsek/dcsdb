import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter hashType="slash">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);