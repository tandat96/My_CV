import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from "react-redux";
import { adddesign,EditDesign } from '../../../actions'


class DesignForm extends Component {
  state = {
    skill: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    if (this.state.skill.trim()) {
      const {skill,ratingDesign}= this.state
      this.props.adddesign(skill,ratingDesign);
    }
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
      skill: '',
      ratingDesign:0
        });

  };
      onStarClick(nextValue, prevValue, name) {
        this.setState({ratingDesign: nextValue});
      }
    render() { 
      const { ratingDesign } = this.state;

        return (                   
        <li className="border-line-h" style={{display: this.props.ShowDesign ? 'block' : 'none' }}>
        <form action="" method="post">
      <input type="text" placeholder="Skill" 
      name="skill"
      onChange={ this.handleInputChange }
      value={ this.state.skill }
      />
      <div className="rate row" style={{width:'80%',margin:'auto'}}>
      <div className="col-8">
     <StarRatingComponent 
       name="ratingDesign"
      starCount={10}
      value={ratingDesign}
      onStarClick={this.onStarClick.bind(this)}/>
      </div>
      <div className="col-4">
      {ratingDesign}
      </div>
      </div> 
      <button className="submit-exp" type="reset" onClick={(e)=>{e.preventDefault();this.props.EditDesign();this.handleSubmit()}}>Save</button>                
    </form>
        </li>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ShowDesign: state.ShowDesign,
    ratingDesign: 1,
    todesign: state.todesign,

  }
}

export default connect(mapStateToProps, { adddesign,EditDesign })(DesignForm)