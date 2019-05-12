import React, { Component } from 'react';
import CodeForm from './add_edit_form/CodeForm';
import { connect } from "react-redux";
import CodeItem from './PrintForm/CodeItem';
import {getcode,EditCode} from '../../actions'


class Code extends Component {
  componentDidMount() {
    this.props.getcode()
  } 
    render() { 
      const {tocodes} = this.props
      const {loggedIn} = this.props;
    
        return ( 
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
   
              <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon"><i className="ion ion-code" /></div>
                <div className="name">Coding</div>
                {loggedIn ? (
                <button className="btn" onClick={()=>this.props.EditCode()} style={{display: this.props.ShowCode ? 'none' : 'block' }}>
                             Add New
                      </button>
                         ) : (
                          <div></div>
                    )}
              </div>
                <ul>
                <CodeForm/>
                { 
                    tocodes.map(tocode => <CodeItem   key={tocode._id} tocode={tocode}
                      loggedIn={this.props.loggedIn}                    
                    />)
                }
              </ul>
              </div>
            </div>

         );
    }
}
 
const mapStateToProps = (state, ownProps) => {
  return {
    ShowCode: state.ShowCode,
    ratingCode: 1,
    tocodes: state.tocodes,

  }
}

export default connect(mapStateToProps, {getcode,EditCode})(Code)