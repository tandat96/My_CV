import React, { Component } from 'react';
import BlogForm from './add_edit_form/BlogForm';
import { connect } from "react-redux";
import BlogItem from './PrintForm/BlogItem';
import { getblog,EditBlog } from '../../actions'



class Blogitem extends Component {
  componentDidMount() {
    this.props.getblog()
  }  
    render() { 
    const {toblogs} = this.props

        return ( 
          <div className="row border-line-v">
            <BlogForm/>
            { 
                    toblogs.map(toblog => <BlogItem key={toblog._id} toblog={toblog}  
                      loggedIn={this.props.loggedIn}                    
                    />)
                }

          </div>
         );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ShowBlog:state.ShowBlog,
    toblogs: state.toblogs,

  }
}

export default connect(mapStateToProps, { getblog,EditBlog })(Blogitem)