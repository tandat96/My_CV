import React, { Component } from 'react';
import ContactForm from '../components/js/add_edit_form/ContactForm';
import { connect } from "react-redux";
import ContactItem from './js/PrintForm/ContactItem';
import { getcontact,Edit } from '../actions'


class Contact extends Component {

  componentDidMount() {
    this.props.getcontact()
}

    render() { 
    const {todos} = this.props
     

        return ( 
  <div className="card-inner" id="card-contacts"  >
    {/* <div style={{position: this.props.changeTab ? 'relative' : 'absolute' }}>     */}
    <div className="card-wrap">
      <div className="content contacts">
        <div className="title">Contact</div>
        <button className="btn" onClick={()=>this.props.Edit()} style={{display: this.props.ShowContact ? 'none' : 'block' }}>
                             Add New
                      </button>
        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
           <div className="info-list">
              <ul>
                <ContactForm />
                { 
                    todos.map(todo => <ContactItem  key={todo._id} todo={todo}/>)
                }
              </ul>
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
    ShowContact:state.ShowContact,
    todos: state.todos,

  }
}
 
export default connect(mapStateToProps, { getcontact, Edit })(Contact)