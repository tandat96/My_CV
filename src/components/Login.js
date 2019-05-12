import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'



class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/users/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="login-style card-inner">
                    <h1>Login</h1>
                    <form method="POST">
                        <input type="text" name="username" placeholder="Username" required="required"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <input type="password" name="password" placeholder="Password" required="required"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <button type="submit" className="btn btn-primary btn-block btn-large" name value="Login" onClick={this.handleSubmit}>Login</button>
                    </form>
                </div>

            );
        }
    }
}

export default Login;