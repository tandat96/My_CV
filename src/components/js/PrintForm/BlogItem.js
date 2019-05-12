import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteblog } from '../../../actions'


class BlogItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    DeleteItem = () => {
      this.props.deleteblog(this.props.toblog._id)
  }
    render() { 
      const { toblog } = this.props
      const {loggedIn} = this.props;


        return ( 
            <div className="col col-d-6 col-t-6 col-m-12">
            <div className="row" style={{margin:'auto',width:'60%',paddingBottom:'20px'}}>
            {loggedIn ? (
                <div className="col"> <a href="#remove" onClick={this.DeleteItem}> <i className="fa fa-trash" aria-hidden="true"></i></a></div>
                ) : (
                  <div className="col"></div>
            )}
                </div>
            <div className="box-item">
              <div id="post-115" className="post-115 post type-post status-publish format-standard has-post-thumbnail hentry category-design category-music tag-code tag-html tag-plugin tag-web">
                <div className="image blog-img" >
                    <img width={590} height={330} src={toblog.image} className="attachment-ntdcv_590x330 size-ntdcv_590x330 wp-post-image" alt="img error" /> 

                </div>
                <div className="desc">
                  <a href="2018/11/16/creativity-is-more-than-a-song/index.html">
                    <span className="date">
                      {toblog.date} </span>
                  </a>
                  <a href="2018/11/16/creativity-is-more-than-a-song/index.html" className="name">{toblog.title} </a>
                  <div className="text">
                    <p>{toblog.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
         );
    }
}
  

 
export default connect(null,{deleteblog})(BlogItem)