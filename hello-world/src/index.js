import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Signup from './Components/signup';
import Signin from './Components/signin';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyC0TpZzEezQJ9opYX6TSGy26tgmScoB-lQ",
    authDomain: "todo-react-version.firebaseapp.com",
    databaseURL: "https://todo-react-version.firebaseio.com",
    projectId: "todo-react-version",
    storageBucket: "todo-react-version.appspot.com",
    messagingSenderId: "440396729071"
};
firebase.initializeApp(config);


ReactDOM.render(
  <Router history={browserHistory}>
    <Route exact path="/" component={App}>
    <IndexRoute component={Signup} />
    </Route>
    <Route path="/signup" component={Signup} />
    <Route path="/signin" component={Signin} />

  </Router>,
  document.getElementById('root')
);
