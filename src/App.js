import React, { Component } from 'react';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { Provider } from "react-redux";
import  store from './store';
// import About from './About';
// import Skills from './Skills';
// import Blog from './Blog';
// import Contact from './Contact';
// import Profile from './Profile';

const urllog = new URL('http://localhost:4000/login');


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            changeTab1:true,
            changeTab2:false,
            changeTab3:false,
            changeTab4:false,
            changeLogin:false
        }
    }
    ChangeTabLogin = ()=>{
        this.setState({ 
            changeTab1:false,
            changeTab2:false,
            changeTab3:false,
            changeTab4:false,
            changeLogin:true
            });
    }
    ChangeTabStatus1=()=>{
        this.setState({ 
            changeTab1:true,
            changeTab2:false,
            changeTab3:false,
            changeTab4:false,
            changeLogin:false

        })
        
    }
    ChangeTabStatus2=()=>{
        this.setState({ 
            changeTab1: false,
            changeTab2:true,
            changeTab3:false,
            changeTab4:false,
            changeLogin:false

        })}
    ChangeTabStatus3=()=>{
            this.setState({ 
                changeTab1: false,
                changeTab2:false,
                changeTab3:true,
                changeTab4:false,
            changeLogin:false

            })}
    ChangeTabStatus4=()=>{
                this.setState({ 
                    changeTab1: false,
                    changeTab2:false,
                    changeTab3:false,
                    changeTab4:true,
            changeLogin:false

                })}
  
    render(
    ) { 
        
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
                              <li data-id="menu-item-110" onClick={()=>this.ChangeTabStatus1()}
                                  className=" menu-item menu-item-type-post_type menu-item-object-page"><a href="#resume"
                                      className="one-page-menu-item"><span className="icon ion-android-list" />About me</a>
                              </li>
                              <li data-id="menu-item-109" onClick={()=>this.ChangeTabStatus2()}
                                  className=" menu-item menu-item-type-post_type menu-item-object-page"><a href="#works"
                                      className="one-page-menu-item"><span className="icon fa fa-diagnoses" />Skills</a></li>
                              <li data-id="menu-item-107" onClick={()=>this.ChangeTabStatus3()}
                                  className=" menu-item menu-item-type-post_type menu-item-object-page"><a href="#blog"
                                      className="one-page-menu-item"><span className="icon ion-chatbox-working" />Blog</a>
                              </li>
                              <li data-id="menu-item-108" onClick={()=>this.ChangeTabStatus4()}
                                  className=" menu-item menu-item-type-post_type menu-item-object-page"><a href="#contacts"
                                      className="one-page-menu-item"><span className="icon fas fa-address-card" />Contact</a></li>
                          </ul>
                      </div>
                  </div>
              </header>
      
              <div className="card-started" id="home-card">
      
                  <div className="profile ">
                    <Profile/>
                      <div className="lnks">
                          <a className="lnk" href={urllog}>
                              <span className="text" >Login</span>
                              <span className="ion fas fa-user-cog" />
                          </a>
                          <a href="index.html#contacts" className="lnk">
                              <span className="text">Contact Me</span>
                              <span className="ion ion-android-send" />
                          </a>
                      </div>
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
            <About changeTab={this.state.changeTab1}
                //  dataExp={this.state.data && this.state.data.experience}
                //  dataEdu={this.state.data && this.state.data.education}
            />
            <Skills changeTab={this.state.changeTab2}
            // dataDesign={this.state.data && this.state.data.design}
            // dataCoding={this.state.data && this.state.data.coding}
            />
            <Blog changeTab={this.state.changeTab3}
                // dataBlog={this.state.data && this.state.data.infomation}
            />
            <Contact changeTab={this.state.changeTab4} 
                // dataContact={this.state.data && this.state.data.contact}
            />
          </div>
      </div>
      </Provider>

         );
    }
}


export default (App)