import React, { Component } from 'react';
import DesignForm from './add_edit_form/DesignForm';
import { connect } from "react-redux";
import DesignItem from './PrintForm/DesignItem';
import { getdesign, EditDesign } from '../../actions'


class Design extends Component {

  componentDidMount() {
    this.props.getdesign()
  }        
    render() { 
    const {todesigns} = this.props

        return ( 
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
   
              <div className="skills-list">
                <div className="skill-title border-line-h">
                  <div className="icon"><i className="ion ion-easel" /></div>
                  <div className="name">Design</div>
                  <button className="btn" onClick={()=>this.props.EditDesign()} style={{display: this.props.ShowDesign ? 'none' : 'block' }}>
                             Add New
                      </button>
                </div>
                <ul>
                <DesignForm />
                { 
                    todesigns.map(todesign => <DesignItem  key={todesign._id} todesign={todesign}/>)
                }
              </ul>
              </div>
            </div>

         );
    }
}
 
const mapStateToProps = (state, ownProps) => {
  return {
    ShowDesign: state.ShowDesign,
    ratingDesign: 1,
    todesigns: state.todesigns,

  }
}
 
export default connect(mapStateToProps,{ getdesign, EditDesign } )(Design)