import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="spinner">
      <div className="lds-dual-ring" />
    </div>
  );
};

export default Loader;
