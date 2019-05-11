import React, { Component } from 'react';
import axios from 'axios'



class Signup extends Component {
    constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
        return ( 
            <div className="login-style card-inner">
            <h1>Sign Up</h1>
            <form method="POST">
            <input type="text" name="username" placeholder="Username" required="required" 
            							value={this.state.username}
                                        onChange={this.handleChange}/>
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
 
export default Signup;