import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// Components
import SignUpForm from '../components/signUpForm';
import LogInForm from '../components/logInForm';

class SessionForm extends Component {
  render() {
    const { location } = this.props;
    const path = location.pathname;

    return(
      <div className='session-form-container'>
        {
          path == '/signup'
          ? <SignUpForm />
          : <LogInForm />
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return ({
  });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
