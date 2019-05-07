import React from 'react';

const AppDropdown = () => {
  return (
    <div className="dropdown is-pulled-right is-hoverable">
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>Change View</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a href="foo" className="dropdown-item">
            Dropdown item
          </a>
          <a href="foo" className="dropdown-item">
            Other dropdown item
          </a>
          <a href="foo" className="dropdown-item is-active">
            Active dropdown item
          </a>
          <a href="foo" className="dropdown-item">
            Other dropdown item
          </a>
          <hr className="dropdown-divider" />
          <a href="foo" className="dropdown-item">
            With a divider
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppDropdown;
