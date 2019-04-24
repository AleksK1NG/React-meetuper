import React from 'react';
import ErrorView from '../../components/ErrorView/ErrorView';

const PageNotFound = () => {
  return (
    <div className="container">
      <ErrorView
        title="Ooooops, page you are trying to access doesn\'t exist"
        status="404"
        navigateToPage="/"
        navigateToText="Navigate back Home"
      />
    </div>
  );
};

export default PageNotFound;
