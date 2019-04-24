import React, { Component } from 'react';
import EduForm from './add_edit_form/EduForm';
import { connect } from "react-redux";
import EduItem from './PrintForm/EduItem';
import { getedu, EditEdu } from '../../actions'



class Edu extends Component {
  componentDidMount() {
    this.props.getedu()
  }
    render() { 
    const {toedus} = this.props

        return (
            <div>
        <EduForm/> 
        { 
                    toedus.map(toedu => <EduItem key={toedu._id} toedu={toedu}/>)
                }
      </div>                     

);
    }
}
 
const mapStateToProps = (state, ownProps) => {
  return {
    Show2:state.Show2,
    toedus: state.toedus,

  }
}

 
export default connect(mapStateToProps, { getedu, EditEdu })(Edu)