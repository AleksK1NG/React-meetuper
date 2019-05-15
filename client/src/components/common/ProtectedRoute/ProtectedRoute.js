import React from 'react';
import { connect } from 'react-redux';
import { isAuthenticatedSelector } from '../../../ducks/authModule/authSelectors';
import { Route, Redirect } from 'react-router-dom';
import { checkTokenValidity } from '../../../utils/checkTokenValidity';

const ProtectedRoute = ({ isAuthorized, component: Component, ...rest }) => {
  if (localStorage.getItem('react-meetuper') && checkTokenValidity(localStorage.getItem('react-meetuper')))
    return <Route render={(props) => <Component {...props} />} {...rest} />;

  return <Route render={(props) => (isAuthorized ? <Component {...props} /> : <Redirect to="/" />)} {...rest} />;
};

export default connect(
  (state) => ({
    isAuthorized: isAuthenticatedSelector(state)
  }),
  null,
  null,
  { pure: false }
)(ProtectedRoute);
