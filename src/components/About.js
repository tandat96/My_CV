import React, { Component } from 'react';
import Exp from './js/Exp'
import Edu from './js/Edu'
import { connect } from "react-redux";
import { EditExp,EditEdu } from '../actions'




class About extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
      const {loggedIn} = this.props;

        return ( 
            <div className="card-inner" id="card-resume" >
            {/* <div style={{position: this.props.changeTab ? 'relative' : 'absolute' }}>             */}
            <div className="card-wrap">
              <div className="content resume">
                <div className="title">About me</div>
                <div className="row">
                  <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="resume-title border-line-h">
                      <div className="icon"><i className="ion ion-briefcase" /></div>
                      <div className="name">Experience
                    {loggedIn ? (
                      <button className="btn" onClick={()=>this.props.EditExp()} style={{display: this.props.Show ? 'none' : 'block' }}>
                             Add New
                      </button>
                      ) : (
                        <div></div>
                  )}

                      </div>
                    </div>
            <div className="resume-items Exp">
                    <Exp
                    />
                    </div>
                  </div>
                  <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="resume-title border-line-h">
                      <div className="icon"><i className="ion ion-university" /></div>
                      <div className="name">EDUCATION
                      {loggedIn ? (
                      <button className="btn"onClick={()=>this.props.EditEdu()} style={{display: this.props.Show2 ? 'none' : 'block' }}>
                      Add New
                      </button>
                      ) : (
                        <div></div>
                  )}
                     
                      </div>
                    </div>
        <div className="resume-items Edu">

                    <Edu
                    />
                    </div>
                 </div>
                  <div className="clear" />
                </div>
              </div>
              </div>
              </div>
          // </div>
          
         );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Show:state.Show,
    toexp: state.toexp,
    Show2:state.Show2,
    toedu: state.toedu,
    

  }
}

 
export default connect(mapStateToProps, { EditExp,EditEdu })(About)