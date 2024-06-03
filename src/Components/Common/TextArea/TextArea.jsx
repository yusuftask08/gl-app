/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Styles */
import '../../Form/Form.scss';

const TextArea = ({ label, ...props }) => (
  <div className="form-group">
    <label>{label}</label>
    <textarea {...props}></textarea>
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TextArea;