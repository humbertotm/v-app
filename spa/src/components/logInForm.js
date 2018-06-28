import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// Components
import renderField from './renderField';
// Stylesheets
import './logInForm.css';

class LogInForm extends Component {
  render() {
    const { error } = this.props

    return(
      <form className='login-form'>
        <Field
          name='email'
          type='email'
          component={renderField}
          label='Email:' />
        <Field
          name='password'
          type='password'
          component={renderField}
          label='Password:' />
        { error && <strong>{error}</strong> }
        <button type='submit'>Log in</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login'
})(LogInForm);
