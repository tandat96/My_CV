import React, { Component } from 'react';
import Profile from './components/Profile';

import { Provider } from "react-redux";
import  store from './store';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'
import Login from './components/Login';
import About from './components/About';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Signup from './components/Signup';



class App extends Component {
    constructor(props) {
        super(props);
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
                    const loggedIn = this.props.loggedIn;
                    console.log('navbar render, props: ')
                    console.log(this.props);
                    
        
        return ( 
            <Provider store={store}>
          <div className="page page_wrap theme-style-classic theme-style-dark">
          <div className="container opened   " data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
      
              <header className="header">
      
                  <div className="profile">
                      <div className="image">
                          <img src="wp-content/uploads/2018/11/profile-140x140.png" alt="Tan Dat" />
                      </div>
                      <div className="title">Tan Dat</div>
                  </div>
      
      
      
                  <div className="top-menu top-menu-onepage">
                      <div className="menu-main-menu-container">
                          <ul id="menu-main-menu" className="menu">
                          <li>
                              <Link to="/About" data-id="menu-item-110" 
                                  className=" menu-item menu-item-type-post_type menu-item-object-page"><a href="#resume"
                                      className="one-page-menu-item"><span className="icon ion-android-list" />About me</a>
                              </Link></li>
                              <li>
                              <Link to="/Skills"  data-id="menu-item-109" 
                                  className=" menu-item menu-item-type-post_type menu-item-object-page"><a href="#works"
                                      className="one-page-menu-item"><span className="icon fa fa-diagnoses" />Skills</a></Link>
                              </li>
                              <li>
                              <Link to="/Blog" data-id="menu-item-107" 
                                  className=" menu-item menu-item-type-post_type menu-item-object-page"><a href="#blog"
                                      className="one-page-menu-item"><span className="icon ion-chatbox-working" />Blog</a>
                              </Link>
                              </li>
                              <li>
                              <Link to="/Contact" data-id="menu-item-108"
                                  className=" menu-item menu-item-type-post_type menu-item-object-page"><a href="#contacts"
                                      className="one-page-menu-item"><span className="icon fas fa-address-card" />Contact</a></Link>
                            </li>
                          </ul>
                      </div>
                  </div>
              </header>
      
              <div className="card-started" id="home-card">
      
                  <div className="profile ">
                    <Profile/>
                      {loggedIn ? (
                      <div className="lnks">
                        <Link to="#" className="lnk login_hover">
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
              </div>
              <div className="s_overlay" />
              <div className="content-sidebar">
                  <div className="login">
                      <input type="text" placeholder="username" name="user" /><br />
                      <input type="password" placeholder="password" name="password" /><br />
                      <input type="button" defaultValue="Login" />
                  </div>
                  <span className="close" />
              </div>
            <Route
                path="/(About|)"
                 render={() =>
                <About
            />}
                />
            <Route
                path="/Skills"               
                 render={() =>
                <Skills
            />}
                />
            <Route
                path="/Blog"               
                 render={() =>
                <Blog
            />}
                />         
            <Route
                path="/Contact"               
                 render={() =>
                <Contact
            />}
                />          
            <Route
                path="/login"
                render={() =>
                <Login
                updateUser={this.updateUser}
            />}
            />
            <Route
                path="/signup"
                render={() =>
            <Signup/>}
        />               
          </div>
      </div>
      </Provider>

         );
    }
}


export default (App)