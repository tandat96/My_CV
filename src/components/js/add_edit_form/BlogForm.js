import React, { Component } from 'react';
import { connect } from "react-redux";
import { addblog,EditBlog } from '../../../actions'


class BlogForm extends Component {


  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    if (this.state.image.trim() && this.state.date.trim() && this.state.title.trim() && this.state.content.trim()) {
      const {image,date,title,content}= this.state
      this.props.addblog(image,date,title,content)
    }
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
    image: '',
    date: '',
    title: '',
    content: '',
    });
  };
    render() { 

        return ( 
          <div className="col col-d-6 col-t-6 col-m-12" style={{display: this.props.ShowBlog ? 'block':'none' }}>
          <form action="" method="post" >
          
          <input type="url"
           name="image"
           onChange={ this.handleInputChange }
          />
          
          <input type="date" placeholder="Date" 
          name="date"
          onChange={ this.handleInputChange }
          />
          <input type="text" placeholder="Title" 
           name="title"
           onChange={ this.handleInputChange }
          />
          <input type="text" placeholder="Content" 
           name="content"
           onChange={ this.handleInputChange }
          />
          <button className="submit-exp" onClick={(e)=>{e.preventDefault();this.props.EditBlog();this.handleSubmit()}}>Save</button>                
        </form>
        </div>
 
         );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ShowBlog:state.ShowBlog,
    toblog: state.toblog

  }
}


export default connect(mapStateToProps,{ addblog,EditBlog })(BlogForm)