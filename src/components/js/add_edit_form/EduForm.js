import React, { Component } from 'react';
import { connect } from "react-redux";
import { addedu,EditEdu } from '../../../actions'


class EduForm extends Component {


  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    if ( this.state.date.trim() && this.state.title.trim() && this.state.local.trim() ) {
      const {date,title,local,content}=this.state;
      this.props.addedu(date,title,local,content);

    }
    this.handleReset();

  };

  handleReset = () => {
    this.setState({
      date: '',
      title: '',
      local: '',
      content: '',
  
    });
  };
    render() { 

        return ( 
            <div className="resume-item border-line-h active" style={{display: this.props.Show2 ? 'block' : 'none' }}>
            <form action="" >
            <input type="date" placeholder="Date"
          name="date"
          onChange={ this.handleInputChange }/>
          <input type="text" placeholder="Title" 
           name="title"
           onChange={ this.handleInputChange }/>
          <input type="text" placeholder="local" 
          name="local"
          onChange={ this.handleInputChange }/>
          <input type="text" placeholder="Content" 
           name="content"
           onChange={ this.handleInputChange }/>
              <button className="submit-exp" onClick={(e)=>{e.preventDefault();this.props.EditEdu();this.handleSubmit()}}>Save</button>                
            </form>
          </div>
         );
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        Show2:state.Show2,
        toedu: state.toedu,

    }
  }

   
  export default connect(mapStateToProps, { addedu,EditEdu })(EduForm)