import React from 'react';
import './PostCreate.scss';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import { validatePostForm } from '../../utils/finalFormValidation/validatePostForm';
import { createPost } from '../../ducks/threadsModule/threadsActions';

const PostCreate = ({ createPost, threadId }) => {
  const onSubmit = (values, formApi) => {
    createPost(values.post, threadId);
    formApi.reset();
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validatePostForm}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit} className="post-create">
            <Field name="post" component="textarea" type="text" label="Additional Info">
              {({ input, meta }) => (
                <div className="field">
                  <label className="title">Write a post</label>
                  <textarea {...input} className="textarea textarea-post" placeholder="Write a post" rows="1" />
                  {meta.touched && meta.error && <span className="help is-danger">{meta.error}</span>}
                  <button disabled={invalid || pristine} className="button is-primary m-t-sm">
                    Send
                  </button>
                </div>
              )}
            </Field>
          </form>
        )}
      />
    </div>
  );
};

export default connect(
  null,
  { createPost }
)(PostCreate);
