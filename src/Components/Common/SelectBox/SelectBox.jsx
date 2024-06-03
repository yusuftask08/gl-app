/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Styles */
import '../../Form/Form.scss'

const SelectBox = ({ label, name, options, value, onChange, defaultOptionText }) => (
  <div className="form-group">
    <label>{label}</label>
    <select name={name} value={value} onChange={onChange}>
      <option value="">{defaultOptionText}</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

SelectBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOptionText: PropTypes.string.isRequired,
};

export default SelectBox;
