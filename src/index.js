import React from 'react';
import ReactDOM from 'react-dom';
import HttpsRedirect from 'react-https-redirect'
import './index.css';
import App from './App';
import {
  BrowserRouter
} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </BrowserRouter>,
  document.getElementById('root')
);


