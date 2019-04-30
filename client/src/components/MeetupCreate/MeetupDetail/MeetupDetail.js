import React from 'react';
import './MeetupDetail.scss';
import { Field } from 'react-final-form';
import { capitalize } from '../../../utils/helpers';

const MeetupDetail = ({ categories }) => {
  return (
    <div>
      <Field name="title" component="input" type="text" label="Title">
        {({ input, meta }) => (
          <div className="field">
            <label className="title m-b-sm">Choose Title</label>
            <input
              className="input"
              type="text"
              {...input}
              placeholder="Enter Title"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      <Field name="startDate" type="date" label="Starts At">
        {({ input, meta }) => (
          <div className="field">
            <label className="title m-b-sm">Start Date</label>
            <input
              className="input"
              type="date"
              {...input}
              placeholder="Start Date"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      <Field name="timeFrom" type="time" label="Time From">
        {({ input, meta }) => (
          <div className="field">
            <label className="title m-b-sm">From</label>
            <input
              className="input"
              type="time"
              {...input}
              placeholder="Time From"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      <Field name="timeTo" type="time" label="Time To">
        {({ input, meta }) => (
          <div className="field">
            <label className="title m-b-sm">To</label>
            <input
              className="input"
              type="time"
              {...input}
              placeholder="Time To"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      {categories && (
        <Field
          name="category"
          component="select"
          type="text"
          label="Categories"
        >
          {({ input, meta }) => (
            <div className="select">
              <select {...input}>
                <option value="category">Category name</option>
                {categories &&
                  categories.map((category) => (
                    <option value={category._id} key={category._id}>
                      {capitalize(category.name)}
                    </option>
                  ))}
              </select>
              {meta.touched && meta.error && (
                <span className="help is-danger">{meta.error}</span>
              )}
            </div>
          )}
        </Field>
      )}
    </div>
  );
};

export default MeetupDetail;
