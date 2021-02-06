import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

firebase.initializeApp({
    apiKey: "AIzaSyCWgno0GM7N-wv5Lo-GSADB4b9gdUfRXHo",
    authDomain: "test-database-49f1c.firebaseapp.com",
    projectId: "test-database-49f1c",
    storageBucket: "test-database-49f1c.appspot.com",
    messagingSenderId: "1057833712951",
    appId: "1:1057833712951:web:6e2c3adc3e393a9d426eb2"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
