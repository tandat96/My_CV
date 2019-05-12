import React, { Component } from 'react';
import Blogitem from './js/Blog-item';
import { connect } from "react-redux";
import { EditBlog } from '../actions'


class Blog extends Component {
        
    render() { 
      const {loggedIn} = this.props;
        return ( 
            <div className="card-inner" id="card-blog" >
            {/* <div style={{position: this.props.changeTab ? 'relative' : 'absolute' }}>             */}
            <div className="card-wrap">
              <div className="content blog">
                <div className="title">Latest Posts</div>
                {loggedIn ? (
                <button className="btn" onClick={(e)=>this.props.EditBlog(e)} style={{display: this.props.ShowBlog ? 'none' : 'block' }}>
                             Add New
                      </button>
                   ) : (
                    <div></div>
              )}
                  <Blogitem 
                  />
                  
                  <div className="clear" />
                </div>
                </div>
            </div>
            // </div>

          
         );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ShowBlog:state.ShowBlog,
    toblog: state.toblog,

  }
}

 
export default connect(mapStateToProps,{ EditBlog })(Blog)