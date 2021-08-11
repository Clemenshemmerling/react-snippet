import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  GoogleReCaptchaProvider,
} from 'react-google-recaptcha-v3';

ReactDOM.render(  
  <GoogleReCaptchaProvider style=".grecaptcha-badge { visibility: hidden; }" reCaptchaKey="6LcF568bAAAAANQ4sToV_LL_GUjUkk_Ln3Z8dzay">
    <App />
  </GoogleReCaptchaProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
