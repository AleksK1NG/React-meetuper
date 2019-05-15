import React from 'react';
import { Field } from 'react-final-form';

const MeetupEditHeroSection = ({ meetup, submit, invalid, pristine }) => {
  return (
    <div className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="subtitle">Some Date</h2>

          <Field name="title" component="input" type="text" label="Title">
            {({ input, meta }) => (
              <div className="field">
                <input className="title input w-50" type="text" {...input} placeholder="Enter Title" />
                {meta.touched && meta.error && <span className="help is-danger">{meta.error}</span>}
              </div>
            )}
          </Field>

          <article className="media v-center">
            <figure className="media-left">
              <p className="image is-64x64">
                <img className="is-rounded" src={meetup.meetupCreator.avatar} alt={meetup.meetupCreator.name} />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  Created by <strong>{meetup.meetupCreator.name}</strong>
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="is-pulled-right">
          <button
            disabled={invalid || pristine}
            className="button is-success is-large"
            type="submit"
            onClick={(event) => {
              submit(event);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MeetupEditHeroSection);
