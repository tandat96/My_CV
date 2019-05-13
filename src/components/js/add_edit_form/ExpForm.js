import React, { Component } from 'react';
import { connect } from "react-redux";
import { addexp,EditExp } from '../../../actions'

class ExpForm extends Component {
  state = {
    date: '',
    title: '',
    company: '',
    content: '',
  
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {

    if ( this.state.title.trim() && this.state.company.trim() ) {
      const {date,title,company,content}=this.state
      this.props.addexp(date,title,company,content)
    }
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
      date: '',
      title: '',
      company: '',
      content: '',
  
    });
  };
    render() { 

        return ( 
            <div className="resume-item border-line-h active" style={{display: this.props.Show ? 'block' : 'none' }}>
            <form action="" method="post">
            <input type="date" placeholder="Date"
          name="date"
          onChange={ this.handleInputChange }/>
          <input type="text" placeholder="Title" 
           name="title"
           onChange={ this.handleInputChange }/>
          <input type="text" placeholder="Company" 
          name="company"
          onChange={ this.handleInputChange }/>
          <input type="text" placeholder="Content" 
           name="content"
           onChange={ this.handleInputChange }/>
              <button className="submit-exp" onClick={(e)=>{e.preventDefault();this.props.EditExp();this.handleSubmit()}}>Save</button>                
            </form>
          </div>
         );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    toexp: state.toexp,
    Show:state.Show,
    }
  }

  export default connect(mapStateToProps,{ addexp,EditExp } )(ExpForm)