
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  // Retrieve the token each time the component is rendered
  const jwtToken = localStorage.getItem('jwtToken');

  return jwtToken ? <Element {...rest} /> :<Navigate to="/login" />;
};

export default PrivateRoute;


