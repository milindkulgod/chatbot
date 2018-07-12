import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase  from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyALAoUj6OEhtdNkUhQKIJpNiDX-P5oQuGU",
    authDomain: "avao-8020f.firebaseapp.com",
    databaseURL: "https://avao-8020f.firebaseio.com",
    projectId: "avao-8020f",
    storageBucket: "avao-8020f.appspot.com",
    messagingSenderId: "727835450784"
  };
  firebase.initializeApp(config);



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
