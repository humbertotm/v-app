import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// Components
import renderField from './renderField';
// Form validations
import signUpSyncValidate from '../utils/formValidations/signUpSyncValidate';

class SignUpForm extends Component {
  render() {
    const {
      handleSubmit, pristine,
      reset, submitting, error,
      currentFormIs, setFormPurpose,
      submitValidate
    } = this.props

    return(
      <form className='sign-up-form'
            onSubmit={handleSubmit}>
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
  form: 'signup',
  validate: signUpSyncValidate
})(SignUpForm);
