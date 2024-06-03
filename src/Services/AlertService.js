import React from 'react';
import { createRoot } from 'react-dom/client';
import Alert from '../Components/Alert/Alert';

const showAlert = (type, message) => {
  const alertContainer = document.createElement('div');
  document.body.appendChild(alertContainer);

  const root = createRoot(alertContainer);

  let destroyed = false;

  const destroy = () => {
    if (!destroyed) {
      root.unmount();
      document.body.removeChild(alertContainer);
      destroyed = true;
    }
  };

  root.render(
    <Alert type={type} message={message} onClose={destroy} />
  );

  setTimeout(destroy, 3000);
};

export default showAlert;