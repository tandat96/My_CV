import React, { Component } from 'react';
import {connect} from 'react-redux';
import { deleteexp } from '../../../actions'


class ExpItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    DeleteItem = () => {
      this.props.deleteexp(this.props.toexp._id)
  }
    render() { 
      const  {toexp} = this.props;
        return ( 
            <div className="resume-item border-line-h active">
            <div className="row" style= {{margin:'auto'}}>
                <div className="date col">{toexp.date}</div>
                <div className="col row">
                  <div className="col"> <a href="#remove"  onClick={this.DeleteItem}> <i className="fa fa-trash" aria-hidden="true"></i></a></div>
                </div>
                </div>
                <div className="name"> {toexp.title}</div>
                <div className="company"> {toexp.company} </div>
                <p>
                 {toexp.content}
                </p>
              </div>
  
         );
    }
}
 

   
  export default connect(null,{ deleteexp } )(ExpItem)
  