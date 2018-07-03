import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// Components
import HomeReact from './HomeReact';
import ScrollableGallery from './ScrollableGallery';
import SessionForm from './SessionForm';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ScrollableGallery} />
          <Route exact path='/signup' component={SessionForm} />
          <Route exact path='/login' component={SessionForm} />
          <Route exact path='/home' component={HomeReact} />
        </div>
      </Router>
    );
  }
}

export default App;
