/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Styles */
import './Alert.scss';

const Alert = ({ type, message, onClose }) => {
  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>&times;</button>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
