import React, { Component } from 'react';

class PostContent extends Compoent {
  render() {
    const { post } = this.props;
    return(
      <div className='post-content'>
        <h3 className='post-title'>{post.title}</h3>
        <h6 className='post-text'>{post.text}</h6>
      </div>
    );
  }
}

export default PostContent;
