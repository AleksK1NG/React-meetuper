import React from 'react';
import { Link } from 'react-router-dom';

export const AppNavbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul className="nav ">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            <i className="fas fa-home" /> Books
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/create">
            <i className="fas fa-plus-circle" /> Create Book
          </Link>
        </li>
      </ul>

      <div className="nav-item">
        <a
          className="nav-link text-white"
          href="https://github.com/AleksK1NG"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <i className="fab fa-github-alt" /> GitHub
        </a>
      </div>
    </nav>
  );
};

export default AppNavbar;
