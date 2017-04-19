import React, { Component } from "react";
import * as firebase from "firebase";


class Signup extends Component {
    constructor() {
        super()
        this.signup = this.signup.bind(this);
    }

    signup() {
        const name = this.refs.name.value;
        const email = this.refs.email.value;
        const pass = this.refs.pass.value;
        // var newUser = {
        //     name: name,
        //     email: email,
        //     pass: pass
        // }
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(this.props.router.push('/signin')
            );
        console.log("Sign Up Success")
    }
    
    render() {
        return (
            <center>
                <div>
                    <h1>Signup Form</h1>

                    <input type="text" ref="name" placeholder="Enter Name" /><br />
                    <input type="Email" ref="email" placeholder="Enter Email" /><br />
                    <input type="Password" ref="pass" placeholder="Enter Password" /><br />
                    <button onClick={this.signup}>Signup</button>
                </div>
            </center>
        )
    }
}
export default Signup;