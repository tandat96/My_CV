import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteedu } from '../../../actions'


class EduItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    DeleteItem = () => {
      this.props.deleteedu(this.props.toedu._id)
  }
    render() { 
      const  {toedu} = this.props;

        return ( 
            <div className="resume-item border-line-h ">
            <div className="row" style= {{margin:'auto'}}>
            <div className="date col">{toedu.date}</div>
                <div className="col row">
                  <div className="col"> <a href="#remove"  onClick={this.DeleteItem}> <i className="fa fa-trash" aria-hidden="true"></i></a></div>
                </div>
                </div>
            <div className="name"> {toedu.title}</div>
            <div className="company">{toedu.local} </div>
            <p>
            {toedu.content}
              </p>
          </div>
    
         );
    }
}
 

   
  export default connect(null,{ deleteedu } )(EduItem)
