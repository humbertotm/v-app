import React, { Component } from 'react';
// Components
import PostContent from './postContent';

class GalleryPost extends Component {
  render() {
    const { post } = this.props;
    // Class names will be defined based on some props
    // to set gallery post styles apart from single post ones.
    return(
      <div className='post-container'>
        <PostContent post={post} />
        <div className='buttons'>
          <p>Buttons will go here</p>
        </div>
      </div>
    );
  }
}

export default GalleryPost;
