import React, { Component } from 'react';
import { connect } from "react-redux";
import { addcontact,Edit } from '../../../actions'

class ContactForm extends Component {


  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    if (this.state.nameInfo.trim() && this.state.value.trim()) {
    const {nameInfo,value}= this.state;
    this.props.addcontact(nameInfo,value)
    }
    
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
      nameInfo: '',
      value: '',
    });
  };

  
    render() { 
      
        return ( 
            <li className="border-contact" style={{paddingBottom: '50px', bottom: '10px',display: this.props.ShowContact ? 'block' : 'none' }}>
                  <form className="form-contact" action="/AddNewContact/" method="post"
                  //  onSubmit={ }
                  >
                <input className="name" type="text" placeholder="Name Info" 
                name="nameInfo"
                onChange={ this.handleInputChange }
                />
                <input className="value" type="text" placeholder="Value" 
                name="value"
                onChange={ this.handleInputChange }
                />
                <button type='reset' className="submit-exp" onClick={(e)=>{e.preventDefault();this.props.Edit();this.handleSubmit()}}>Save</button>                
              </form>
            </li>
           
         );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ShowContact:state.ShowContact,
    todos: state.todos

  }
}

export default connect(mapStateToProps, { addcontact, Edit })(ContactForm)