import React, { Component } from 'react';



class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
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

         );
    }
}
 
export default Profile;