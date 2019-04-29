import React from 'react';
import { Field } from 'react-final-form';

const MeetupDescription = () => {
  return (
    <div className="m-b-md">
      <Field name="imageUrl" component="input" type="text" label="Image URL">
        {({ input, meta }) => (
          <div className="field">
            <label className="title">Image</label>
            <input
              className="input"
              type="text"
              {...input}
              placeholder="Image URL"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      <Field
        name="info"
        component="textarea"
        type="text"
        label="Additional Info"
      >
        {({ input, meta }) => (
          <div className="field">
            <label className="title">Additional Info</label>
            <textarea
              {...input}
              className="textarea"
              placeholder="Write Short Info"
              rows="3"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      <Field
        name="description"
        component="textarea"
        type="text"
        label="Long Description"
      >
        {({ input, meta }) => (
          <div className="field">
            <label className="title">Long Description</label>
            <textarea
              {...input}
              className="textarea"
              placeholder="Write description"
              rows="3"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>
    </div>
  );
};

export default MeetupDescription;
