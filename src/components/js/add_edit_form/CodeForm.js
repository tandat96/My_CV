import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from "react-redux";
import { addcode,EditCode } from '../../../actions'


class CodeForm extends Component {
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
      const {skill,ratingCode}= this.state
      this.props.addcode(skill,ratingCode);
    }
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
      skill: '',
      ratingCode:0
        });

  };
      onStarClick(nextValue, prevValue, name) {
        this.setState({ratingCode: nextValue});
      }
    render() { 
      const { ratingCode } = this.state;

        return (                   
        <li className="border-line-h" style={{display: this.props.ShowCode ? 'block' : 'none' }}>
        <form action="" method="post">
      <input type="text" placeholder="Skill" 
      name="skill"
      onChange={ this.handleInputChange }
      value={ this.state.skill }
      />
      <div className="rate row" style={{width:'80%',margin:'auto'}}>
      <div className="col-8">
     <StarRatingComponent 
       name="ratingCode"
      starCount={10}
      value={ratingCode}
      onStarClick={this.onStarClick.bind(this)}/>
      </div>
      <div className="col-4">
      {ratingCode}
      </div>
      </div> 
      <button className="submit-exp" type="reset" onClick={(e)=>{e.preventDefault();this.props.EditCode();this.handleSubmit()}}>Save</button>                
    </form>
        </li>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ShowCode: state.ShowCode,
    ratingCode: 1,
    tocode: state.tocode,

  }
}

export default connect(mapStateToProps, { addcode,EditCode })(CodeForm)