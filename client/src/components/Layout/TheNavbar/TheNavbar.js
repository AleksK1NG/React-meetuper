import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser, userSelector } from '../../../ducks/auth';

const TheNavbar = ({ user, logoutUser }) => {
  return (
    <nav
      className="navbar is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 className="title is-4">React Meetuper</h1>
        </Link>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link to="/find" className="navbar-item">
            Find
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          {user && <div className="navbar-item">Welcome {user.name}</div>}

          {user && (
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Account</a>
              <div className="navbar-dropdown">
                <Link to="/profile" className="navbar-item">
                  Profile
                </Link>
                <hr className="navbar-divider" />
                <a onClick={() => logoutUser()} className="navbar-item">
                  Logout
                </a>
              </div>
            </div>
          )}

          {!user && (
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/register" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/login" className="button is-light">
                  Log in
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default connect(
  (state) => ({
    user: userSelector(state)
  }),
  { logoutUser }
)(TheNavbar);
