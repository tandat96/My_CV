import React, { Component } from 'react';
import { connect } from "react-redux";
import { deletecontact } from '../../../actions'



class ContactItem  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    DeleteItem = () => {
        this.props.deletecontact(this.props.todo._id)
    }
    render() { 
        const { todo } = this.props
        const {loggedIn} = this.props;

        return ( 
            <li>
            <div className="row">
            <div className="col value_contact">
            <strong>{todo.nameInfo}:</strong>
            {todo.value}
            </div>
            {loggedIn ? (
            <div className="col">
          <div className=""> <a href="#remove" onClick={this.DeleteItem}> <i className="fa fa-trash" aria-hidden="true"></i></a></div>
        </div>
        ) : (
            <div className="col"></div>
      )}
            </div>
            </li>
         );
    }
}

  export default connect(null, {deletecontact})(ContactItem)