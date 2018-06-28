import React, { Component } from 'react';

function renderField({ input, label, type, meta: { touched, error } }) {
  return(
    <div>
      <label></label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
}

export default renderField;
