import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'



class Profile extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const {loggedIn} = this.props;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return ( 
            <div className="profile ">

            <div className="profile-content">
      
            <div className="slide" style={{backgroundImage: 'url(wp-content/uploads/2018/11/bg-1.jpg)'}} />

            <div className="image">
                <a href="#img">
                    <img src="wp-content/uploads/2018/11/profile-140x140.jpg" alt="Tan Dat" />
                </a>
            </div>

            <div className="title">Tan Dat</div>
            <div className="subtitle subtitle-typed">
                Full Stack JS
            </div>

            <div className="social row">
                <span className="col fab fa-html5"/>
                <span className="col fab fa-css3" />
                <span className="col fab fa-react" />
                <span className="col fab fa-node-js" />
                <span className="col fab fa-centos" />
            </div>
        </div>
           {loggedIn ? (
            <div className="lnks">
              <Link to="/" className="lnk login_hover" onClick={this.logout}>
                    <span className="text" >Logout</span>
                    <span className="ion fas fa-user-cog" />
                </Link>
        </div>
              ) : (
            <div className="lnks">

                  <Link to="/login" className="lnk login_hover">
                  <span className="text" >Login</span>
                  <span className="ion fas fa-user-cog" />
              </Link>
              <Link to="/signup" className="lnk login_hover">
                  <span className="text" >Signup</span>
                  <span className="ion fas fa-user-cog" />
              </Link>
              </div>
                  )}
                      </div>


         );
    }
}
 
export default Profile;