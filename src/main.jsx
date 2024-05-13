import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/blogPage">
      <App />
    </Router>
  </React.StrictMode>,
  rootElement
);
