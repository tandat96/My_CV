import React, { Component } from 'react';



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="login-style card-inner">
            <h1>Sign Up</h1>
            <form action="/signup" method="POST">
            <input type="text" name="username" placeholder="Username" required="required" />
            <input type="password" name="password" placeholder="Password" required="required" />
            <button type="submit" className="btn btn-primary btn-block btn-large" name value="Login">Login</button>
            </form>
            </div>

         );
    }
}
 
export default Signup;