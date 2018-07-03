import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class ScrollableGallery extends Component {
  render() {
    // Render post list based on current route
    // Construct param for query with route
    return(
      <div className='scrollable-gallery-container'>
        <h1>Hello from Home Component</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return({});
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScrollableGallery));
