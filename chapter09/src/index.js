import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwocvegfDGFP8oLuYo5g1Gl9CSxn8dm_k",
  authDomain: "crud-project-49583.firebaseapp.com",
  projectId: "crud-project-49583",
  storageBucket: "crud-project-49583.appspot.com",
  messagingSenderId: "311584226164",
  appId: "1:311584226164:web:d42bf1d106cd1ffe458a21",
  measurementId: "G-D2EMLZ046Z"
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
