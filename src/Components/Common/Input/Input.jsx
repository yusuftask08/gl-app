/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Styles */
import '../../Form/Form.scss';

const Input = ({ label, ...props }) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...props} type="text" />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;