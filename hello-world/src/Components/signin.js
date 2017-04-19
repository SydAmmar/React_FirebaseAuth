import React, { Component } from "react";
import * as firebase from "firebase";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


class Signin extends Component {
    constructor() {
        super()
        this.signin = this.signin.bind(this);
    }

    signin() {
        const email = this.refs.email.value;
        const pass = this.refs.pass.value;
        firebase.auth().signInWithEmailAndPassword(email,pass)
        .then(
            browserHistory.push("/")
        )
        console.log("Sign In Succuess")
    }

    render() {
        return (
            <center>
            <div>
                <h1>Sign In</h1>
                
                <label>Email :</label>
                <input type="Email" ref="email" placeholder="Enter Email" /><br /><br />
                <label>Password :</label>
                <input type="Password" ref="pass" placeholder="Enter Password" /><br />
                <button onClick={this.signin}>Signup</button>
            </div>
            </center>
        )
    }
}
export default Signin;