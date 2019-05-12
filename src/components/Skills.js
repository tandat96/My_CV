import React, { Component } from 'react';
import Design from './js/Design';
import Code from './js/Code';
import { connect } from "react-redux";
import {EditDesign,EditCode} from '../actions'


class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
          }
          
    }

    render() { 
        return ( 
            <div className="card-inner" id="card-works" >
            {/* <div style={{position: this.props.changeTab ? 'relative' : 'absolute' }}> */}
             <div className="card-wrap">
            <div className="content skills">
                <div className="title">My Skills</div>
                <div className="row">
                  <Design
                    loggedIn={this.props.loggedIn}
                  />
                  <Code
                    loggedIn={this.props.loggedIn}
                  />
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
    ShowDesign: state.ShowDesign,
    todesign: state.todesign,
    ShowCode: state.ShowCode,
    tocode: state.tocode,
    
  }
}

 
export default connect(mapStateToProps, {EditDesign,EditCode})(Skills)