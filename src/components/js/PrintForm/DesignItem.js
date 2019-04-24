import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from "react-redux";
import { deletedesign } from '../../../actions'


class DesignItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    DeleteItem = () => {
      this.props.deletedesign(this.props.todesign._id)
  }
    render() { 
      const  {todesign} = this.props;

        return ( 
            <li className="border-line-h">
            <div className="row">
              <div className="name col"> {todesign.skill}</div>
              <div className="col row">
          <div className="col"> <a href="#remove" onClick={this.DeleteItem}> <i className="fa fa-trash" aria-hidden="true"></i></a></div>
        </div>
              </div>
              <div className="rate">
         <StarRatingComponent 
           name="rate" 
          starCount={10}
          value={todesign.ratingDesign}/>
          </div> 
            </li>
         
         );
    }
}

export default connect(null,{ deletedesign } )(DesignItem)
