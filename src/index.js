import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDzH48UfGhy-W1QehOqfHkuzXLgLyKAhHI",
  authDomain: "payitfwd-498.firebaseapp.com",
  projectId: "payitfwd-498",
  storageBucket: "payitfwd-498.appspot.com",
  messagingSenderId: "535736793945",
  appId: "1:535736793945:web:4fcf21340e0a217aac2a48",
  measurementId: "G-J7K4E8ET70"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
