import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from "react-redux";
import { deletecode } from '../../../actions'


class CodeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    DeleteItem = () => {
      this.props.deletecode(this.props.tocode._id)
  }
    render() { 
      const  {tocode} = this.props;
      const {loggedIn} = this.props;


        return ( 
            <li className="border-line-h">
            <div className="row">
             <div className="name col"> {tocode.skill}</div>
               <div className="col row">
               {loggedIn ? (
           <div className="col"> <a href="#remove" onClick={this.DeleteItem}> <i className="fa fa-trash" aria-hidden="true"></i></a></div>
           ) : (
            <div className="col"></div>
      )}
           </div>

               </div>
               <div className="rate">
          <StarRatingComponent 
            name="rate1" 
           starCount={10}
           value={tocode.ratingCode}/>
           </div> 
             </li>

         );
    }
}
 

export default connect(null,{ deletecode } )(CodeItem)
