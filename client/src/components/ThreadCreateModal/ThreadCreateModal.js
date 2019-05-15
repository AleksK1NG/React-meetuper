import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { validateThreadsModalForm } from '../../utils/finalFormValidation/validateThreadsModalForm';

const ThreadCreateModal = ({ btnTitle, title, meetupId, createThread }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (values, formApi) => {
    createThread(values.title, meetupId);
    formApi.reset();
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)} className="button is-success">
        {btnTitle}
      </button>

      <div className={isOpen ? 'modal is-active' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button onClick={() => setIsOpen(false)} className="delete" aria-label="close" />
          </header>
          <section className="modal-card-body">
            <Form
              onSubmit={onSubmit}
              validate={validateThreadsModalForm}
              render={({ handleSubmit, pristine, invalid }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="title" component="textarea" type="text" label="Additional Info">
                    {({ input, meta }) => (
                      <div className="field">
                        <label className="title">What would you like to ask?</label>
                        <textarea
                          {...input}
                          className="textarea"
                          placeholder="Just write something that interest you :)"
                          rows="10"
                        />
                        {meta.touched && meta.error && <span className="help is-danger">{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <button disabled={invalid || pristine} className="button is-success" type="submit">
                    Create
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
    </div>
  );
};

export default ThreadCreateModal;
