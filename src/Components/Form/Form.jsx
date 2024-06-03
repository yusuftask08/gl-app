/** Depencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/** Components */
import Input from '../Common/Input/Input';
import SelectBox from '../Common/SelectBox/SelectBox';
import Switch from '../Common/Switch/Switch';
import TextArea from '../Common/TextArea/TextArea';
import showAlert from '../../Services/AlertService';

/** Styles */
import './Form.scss';

const Form = () => {
  const [formData, setFormData] = useState({
    userId: '',
    title: '',
    body: '',
    active: false,
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) =>
        showAlert('error', `Error fetching users ${err}`))
  }, []);

  const handleClearForm = () => {
    setFormData({ userId: '', title: '', body: '', active: false });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userId, title, body, active } = formData;

    if (!title || !userId || (active && !body)) {
      showAlert('error', 'Please fill in all required fields');
      return;
    }

    const postData = {
      title: formData.title,
      userId: formData.userId,
      body: formData.active ? formData.body : '',
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then((response) => {
        if (response) {
          showAlert('success', 'Success submitting form');
          setTimeout(() => {
            handleClearForm();
          }, 50);
        }
      })
      .catch((err) => showAlert('error', `Error submitting form ${err}`));
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="my-form">
      <Input
        label="Title"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <SelectBox
        defaultOptionText="Select a user"
        label="User"
        name="userId"
        options={users}
        value={formData.userId}
        onChange={handleChange}
      />
      <Switch
        label="Active"
        name="active"
        checked={formData.active}
        onChange={handleChange}
      />
      {formData.active && (
        <TextArea
          label="TextArea"
          name="body"
          placeholder="body"
          value={formData.body}
          onChange={handleChange}
        />
      )}
      <div className='form-action'>
        <button type="submit">Submit</button>
        <button type="button" className='clear-form-button' onClick={handleClearForm}>Cancel</button>
      </div>
    </form>
  );
};

export default Form;
