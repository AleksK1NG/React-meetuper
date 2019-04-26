import React from 'react';
import { connect } from 'react-redux';
import { isAuthSelector } from '../../../ducks/auth';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isAuthorized, component: Component, ...rest }) => {
  if (localStorage.getItem('react-meetuper'))
    return <Route render={(props) => <Component {...props} />} {...rest} />;

  return (
    <Route
      render={(props) =>
        isAuthorized ? <Component {...props} /> : <Redirect to="/" />
      }
      {...rest}
    />
  );
};

export default connect(
  (state) => ({
    isAuthorized: isAuthSelector(state)
  }),
  null,
  null,
  { pure: false }
)(ProtectedRoute);
