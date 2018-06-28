import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// Components
import renderField from './renderField';

class SignUpForm extends Component {
  render() {
    const { error } = this.props

    return(
      <form className='sign-up-form'>
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
        <Field
          name='passwordConf'
          type='password'
          component={renderField}
          label='Password confirmation:' />
        { error && <strong>{error}</strong> }
        <button type='submit'>Create account</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signup'
})(SignUpForm);
