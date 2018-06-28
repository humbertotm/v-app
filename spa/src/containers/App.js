import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// Components
import Home from './Home';
import SessionForm from './SessionForm';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={SessionForm} />
          <Route exact path='/login' component={SessionForm} />
        </div>
      </Router>
    );
  }
}

export default App;
