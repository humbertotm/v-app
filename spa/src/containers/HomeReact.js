import React, { Component } from 'react';
import { connect } from 'react-redux';
// components
import CounterButton from '../components/counterButton';
// action creators
import {
  increaseCount,
  decreaseCount
} from '../redux/action-creators/alterCount';
// assets
import logo from '../logo.svg';
import './Home.css';

class HomeReact extends Component {
  render() {
    const {
      count,
      increaseCount,
      decreaseCount
     } = this.props;

    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-title">Welcome to React</h1>
        </header>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
        <CounterButton
          count={count}
          increaseCount={increaseCount}
          decreaseCount={decreaseCount} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    increaseCount: () => {
      dispatch(increaseCount());
    },
    decreaseCount: () => {
      dispatch(decreaseCount());
    }
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeReact);
