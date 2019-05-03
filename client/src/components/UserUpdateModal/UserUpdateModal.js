import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, Form } from 'react-final-form';
import { validateUserUpdateModalForm } from '../../utils/finalFormValidation/validateUserUpdateModalForm';
import { userSelector } from '../../ducks/auth';

const UserUpdateModal = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (values, formApi) => {
    console.log('update user =>', values);
    formApi.reset();
    setIsOpen(false);
  };
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="button is-primary is-outlined m-t-sm"
      >
        Update Info
      </button>

      {user && (
        <div className={`modal ${isOpen ? 'is-active' : null}`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">User Profile</p>
              <button
                onClick={() => setIsOpen(false)}
                className="delete"
                aria-label="close"
              />
            </header>
            <section className="modal-card-body">
              <Form
                initialValues={{
                  name: user.name,
                  username: user.username,
                  avatar: user.avatar,
                  info: user.info
                }}
                validate={validateUserUpdateModalForm}
                onSubmit={onSubmit}
                render={({ handleSubmit, pristine, invalid }) => (
                  <form onSubmit={handleSubmit}>
                    <Field
                      name="name"
                      component="input"
                      type="text"
                      label="Name"
                    >
                      {({ input, meta }) => (
                        <div className="field">
                          <label className="title">Name</label>
                          <textarea
                            {...input}
                            className="input"
                            placeholder="Name"
                          />
                          {meta.touched && meta.error && (
                            <span className="help is-danger">{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>

                    <Field
                      name="username"
                      component="textarea"
                      type="text"
                      label="Username"
                    >
                      {({ input, meta }) => (
                        <div className="field">
                          <label className="title">Username</label>
                          <textarea
                            {...input}
                            className="input"
                            placeholder="Username"
                          />
                          {meta.touched && meta.error && (
                            <span className="help is-danger">{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>

                    <Field
                      name="avatar"
                      component="input"
                      type="text"
                      label="Avatar"
                    >
                      {({ input, meta }) => (
                        <div className="field">
                          <label className="title">Avatar</label>
                          <textarea
                            {...input}
                            className="input"
                            placeholder="Avatar"
                          />
                          {meta.touched && meta.error && (
                            <span className="help is-danger">{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>

                    <Field
                      name="info"
                      component="input"
                      type="text"
                      label="Info"
                    >
                      {({ input, meta }) => (
                        <div className="field">
                          <label className="title">Info</label>
                          <textarea
                            {...input}
                            className="input"
                            placeholder="Info"
                          />
                          {meta.touched && meta.error && (
                            <span className="help is-danger">{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                    <button
                      disabled={invalid || pristine}
                      className="button is-success"
                      type="submit"
                    >
                      Save changes
                    </button>
                    <button onClick={() => setIsOpen(false)} className="button">
                      Cancel
                    </button>
                  </form>
                )}
              />
            </section>
            <footer className="modal-card-foot" />
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(
  (state) => ({
    user: userSelector(state)
  }),
  {}
)(UserUpdateModal);
