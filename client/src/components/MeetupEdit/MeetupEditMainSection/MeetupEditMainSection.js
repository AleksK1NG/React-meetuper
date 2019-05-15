import React from 'react';
import { Field } from 'react-final-form';
import { capitalize } from '../../../utils/helpers';

const MeetupEditMainSection = ({ categories, meetup }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <aside className="is-medium menu">
              <div className="meetup-side-box">
                <div className="meetup-side-box-date m-b-sm">
                  <p>
                    <b>Time</b>
                  </p>

                  <Field name="startDate" type="date" label="Starts At">
                    {({ input, meta }) => (
                      <div className="field">
                        <label className="title m-b-sm">Starts At</label>
                        <input className="input" type="date" {...input} placeholder="Start Date" />
                        {meta.touched && meta.error && <span className="help is-danger">{meta.error}</span>}
                      </div>
                    )}
                  </Field>

                  <div className="field m-t-md">
                    <Field name="timeFrom" type="time" label="Time From">
                      {({ input, meta }) => (
                        <div className="field">
                          <label className="title m-b-sm">From</label>
                          <input className="input" type="time" {...input} placeholder="Time From" />
                          {meta.touched && meta.error && <span className="help is-danger">{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                  </div>
                  <Field name="timeTo" type="time" label="Time To">
                    {({ input, meta }) => (
                      <div className="field">
                        <label className="title m-b-sm">To</label>
                        <input className="input" type="time" {...input} placeholder="Time To" />
                        {meta.touched && meta.error && <span className="help is-danger">{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </div>
                <Field name="category" component="select" type="input" label="Categories">
                  {({ input, meta }) => (
                    <div className="select">
                      <select {...input}>
                        <option value={meetup.category._id}>{capitalize(meetup.category.name)}</option>
                        {categories &&
                          categories.map((category) => (
                            <option value={category._id} key={category._id}>
                              {capitalize(category.name)}
                            </option>
                          ))}
                      </select>
                      {meta.touched && meta.error && <span className="help is-danger">{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <div className="meetup-side-box-place m-b-sm">
                  <p>
                    <b>How to find us</b>
                  </p>
                  <Field name="location" component="input" type="text" label="Meetup location">
                    {({ input, meta }) => (
                      <div className="field">
                        <label>Meetup location</label>
                        <input className="input" type="text" {...input} placeholder="Meetup location" />
                        {meta.touched && meta.error && <span className="help is-danger">{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="meetup-side-box-more-info">
                  <p>
                    <b>Additional Info</b>
                  </p>
                  <Field name="shortInfo" component="textarea" type="text" label="Additional Info">
                    {({ input, meta }) => (
                      <div className="field">
                        <label className="title">Additional Info</label>
                        <textarea {...input} className="textarea" placeholder="Write Short Info" rows="3" />
                        {meta.touched && meta.error && <span className="help is-danger">{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </div>
              </div>
              <div className="meetup-side-box-map">
                <img
                  src="https://cnet2.cbsistatic.com/img/H_zPLL8-QTZOLxJvgHQ1Jkz0EgY=/830x467/2013/07/10/f0bcef02-67c2-11e3-a665-14feb5ca9861/maps_routemap.png"
                  className="venueMap-mapImg span--100"
                  alt={meetup.title}
                />
              </div>
            </aside>
          </div>
          <div className="column is-7 is-offset-1">
            <div className="content is-medium">
              <h3 className="title is-3">About the Meetup</h3>
              <Field name="description" component="textarea" type="text" label="Long Description">
                {({ input, meta }) => (
                  <div className="field">
                    <label className="title">Long Description</label>
                    <textarea {...input} className="textarea" placeholder="Write description" rows="3" />
                    {meta.touched && meta.error && <span className="help is-danger">{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetupEditMainSection;
