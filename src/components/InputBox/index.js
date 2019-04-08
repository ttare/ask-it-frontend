import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'formik';

import './style.css';

const InputBox = ({
  id,
  label,
  type,
  name,
  placeholder,
  size,
  component,
  touched,
  errors,
  children,
  wrapperClassName,
  className,
  handleBlur,
  handleChange,
  disabled,
  showError,
  minLength,
  maxLength,
  submitCount
}) => {
  const hasError =
    (showError && touched[name] && errors[name]) || (errors[name] && submitCount > 0);
  return (
    <div className={`form-group ${wrapperClassName}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <Field
        id={id}
        type={!component ? type : null}
        name={name}
        component={component}
        placeholder={placeholder}
        className={`form-control ${className} ${size || ''} ${hasError ? 'is-invalid' : ''}`}
        onBlur={handleBlur}
        onChange={handleChange}
        disabled={disabled}
        minLength={minLength}
        maxLength={maxLength}
      >
        {component === 'select' ? children : null}
      </Field>
      <small className="invalid-feedback">{hasError ? errors[name] : ' '}</small>
    </div>
  );
};

InputBox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.string,
  disabled: PropTypes.bool,
  errors: PropTypes.shape(),
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  size: PropTypes.string,
  touched: PropTypes.shape(),
  type: PropTypes.string,
  wrapperClassName: PropTypes.string,
  showError: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  submitCount: PropTypes.number
};

InputBox.defaultProps = {
  type: 'text',
  className: null,
  children: null,
  component: undefined,
  disabled: false,
  label: null,
  size: null,
  wrapperClassName: null,
  minLength: null,
  maxLength: null,
  errors: {},
  handleBlur: () => {},
  touched: {},
  showError: true,
  submitCount: 0
};

export default InputBox;
