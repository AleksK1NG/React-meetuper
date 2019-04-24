import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageLogin.scss';

const PageLogin = () => {
  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Login</h3>
            <p className="subtitle has-text-grey">Please login to proceed.</p>
            <div className="box">
              <figure className="avatar">
                <img src="https://placehold.it/128x128" />
              </figure>
              <form>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="email"
                      placeholder="Your Email"
                    />
                    <div className="form-error">
                      <span className="help is-danger">Email is required</span>
                      <span className="help is-danger">
                        Email address is not valid
                      </span>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="password"
                      placeholder="Your Password"
                    />
                    <div className="form-error">
                      <span className="help is-danger">
                        Password is required
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  disabled
                  className="button is-block is-info is-large is-fullwidth"
                >
                  Login
                </button>
              </form>
            </div>
            <p className="has-text-grey">
              <a>Sign In With Google</a> &nbsp;·&nbsp;
              <Link to="/register">Sign Up</Link> &nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageLogin;
