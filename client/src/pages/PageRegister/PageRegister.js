import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, Form } from 'react-final-form';
import { validate } from '../../utils/finalFormValidate';
import './PageRegister.scss';
import { registerUser } from '../../ducks/auth';

const PageRegister = ({ registerUser }) => {
  const onSubmit = (values, formApi) => {
    console.log('Submit form ;D', values);

    registerUser(values);
    formApi.reset();
  };
  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Register</h3>
            <p className="subtitle has-text-grey">Please login to proceed.</p>
            <div className="box">
              <figure className="avatar">
                <img src="https://placehold.it/128x128" />
              </figure>
              <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, pristine, invalid }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <Field
                          name="username"
                          component="input"
                          type="text"
                          label="Username"
                        >
                          {({ input, meta }) => (
                            <div>
                              <label>Username</label>
                              <input
                                className="input is-large"
                                type="text"
                                {...input}
                                placeholder="Username"
                              />
                              {meta.touched && meta.error && (
                                <span className="help is-danger">
                                  {meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <Field
                          name="name"
                          component="input"
                          type="text"
                          label="Name"
                        >
                          {({ input, meta }) => (
                            <div>
                              <label>Name</label>
                              <input
                                className="input is-large"
                                type="text"
                                {...input}
                                placeholder="Name"
                              />
                              {meta.touched && meta.error && (
                                <span className="help is-danger">
                                  {meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <Field
                          name="avatar"
                          component="input"
                          type="text"
                          label="Avatar URL"
                        >
                          {({ input, meta }) => (
                            <div>
                              <label>User Avatar URL</label>
                              <input
                                className="input is-large"
                                type="text"
                                {...input}
                                placeholder="Avatar URL"
                              />
                              {meta.touched && meta.error && (
                                <span className="help is-danger">
                                  {meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <Field
                          name="email"
                          component="input"
                          type="email"
                          label="Email"
                        >
                          {({ input, meta }) => (
                            <div>
                              <label>Email</label>
                              <input
                                className="input is-large"
                                type="text"
                                {...input}
                                placeholder="Email"
                              />
                              {meta.touched && meta.error && (
                                <span className="help is-danger">
                                  {meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <Field
                          name="password"
                          component="input"
                          label="Password"
                        >
                          {({ input, meta }) => (
                            <div>
                              <label>Password</label>
                              <input
                                className="input is-large"
                                type="password"
                                {...input}
                                placeholder="Password"
                              />
                              {meta.touched && meta.error && (
                                <span className="help is-danger">
                                  {meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <Field
                          name="passwordConfirmation"
                          component="input"
                          label="Password Confirmation"
                        >
                          {({ input, meta }) => (
                            <div>
                              <label>Password</label>
                              <input
                                className="input is-large"
                                type="password"
                                {...input}
                                placeholder="Password Confirmation"
                              />
                              {meta.touched && meta.error && (
                                <span className="help is-danger">
                                  {meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>

                    <button
                      disabled={pristine || invalid}
                      type="submit"
                      className="button is-block is-info is-large is-fullwidth"
                    >
                      Register
                    </button>
                  </form>
                )}
              />
            </div>
            <p className="has-text-grey">
              <a>Sign In With Google</a> &nbsp;·&nbsp;
              <Link to="/register">Login</Link> &nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(
  (state) => ({}),
  { registerUser }
)(PageRegister);
