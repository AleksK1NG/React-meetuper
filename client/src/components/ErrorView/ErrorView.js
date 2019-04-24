import React from 'react';
import { Link } from 'react-router-dom';

const ErrorView = ({ title, status, navigateToPage, navigateToText }) => {
  return (
    <div className="notFoundContainer">
      <div className="m-b-xxl">
        <h1 className="title">{title}</h1>
        <Link to={navigateToPage} className="button is-primary">
          {navigateToText}
        </Link>
      </div>
      <h2 className="subtitle">
        {status}
        <span> :(</span>
      </h2>
    </div>
  );
};

export default ErrorView;
