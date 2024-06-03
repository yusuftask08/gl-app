/** Dependencies */
import React from 'react';
import '../../Form/Form.scss';

/** Styles */
import PropTypes from 'prop-types';

const Switch = ({ label, ...props }) => (
  <div className="form-group switch">
    <label>{label}</label>
    <label className="switch">
      <input type="checkbox" {...props} />
      <span className="slider round"></span>
    </label>
  </div>
);

Switch.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Switch;