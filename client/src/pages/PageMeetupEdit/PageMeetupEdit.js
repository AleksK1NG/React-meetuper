import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './PageMeetupEdit.scss';
import {
  fetchMeetupById,
  loadingMeetupsSelector,
  meetupSelector
} from '../../ducks/meetups';
import Loader from '../../components/shared/Loader/Loader';
import { Field, Form } from 'react-final-form';
import moment from 'moment';

const PageMeetupEdit = ({ meetup, loading, match, fetchMeetupById }) => {
  useEffect(() => {
    fetchMeetupById(match.params.id);
  }, []);

  const onSubmit = (values, formApi) => {
    const startDate = moment(values.startDate).format();

    // updateMeetup({ ...values, startDate });

    console.log('PageMeetupEdit =>', { ...values, startDate });

    formApi.reset();
  };

  if (loading || !meetup) return <Loader />;

  let submit;

  return (
    <div className="meetup-detail-page">
      <Form
        initialValues={{
          // startDate: meetup.startDate,
          startDate: moment(meetup.startDate).format('YYYY-MM-DD'),
          title: meetup.title,
          timeFrom: meetup.timeFrom,
          timeTo: meetup.timeTo,
          location: meetup.location,
          shortInfo: meetup.shortInfo,
          description: meetup.description
        }}
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid, values, submitting }) => {
          console.log('Form values =>', values);
          submit = handleSubmit;
          return (
            <form onSubmit={handleSubmit} id="exampleForm">
              <div className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle">Some Date</h2>

                    <Field
                      name="title"
                      component="input"
                      type="text"
                      label="Title"
                    >
                      {({ input, meta }) => (
                        <div className="field">
                          <input
                            className="title input w-50"
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

                    <article className="media v-center">
                      <figure className="media-left">
                        <p className="image is-64x64">
                          <img
                            className="is-rounded"
                            src={meetup.meetupCreator.avatar}
                          />
                        </p>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            Created by{' '}
                            <strong>{meetup.meetupCreator.name}</strong>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="is-pulled-right">
                    <button
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

                            <Field
                              name="startDate"
                              type="date"
                              label="Starts At"
                            >
                              {({ input, meta }) => (
                                <div className="field">
                                  <label className="title m-b-sm">
                                    Starts At
                                  </label>
                                  <input
                                    className="input"
                                    type="date"
                                    {...input}
                                    placeholder="Start Date"
                                  />
                                  {meta.touched && meta.error && (
                                    <span className="help is-danger">
                                      {meta.error}
                                    </span>
                                  )}
                                </div>
                              )}
                            </Field>

                            <div className="field m-t-md">
                              <Field
                                name="timeFrom"
                                type="time"
                                label="Time From"
                              >
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
                                      <span className="help is-danger">
                                        {meta.error}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </Field>
                            </div>
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
                                    <span className="help is-danger">
                                      {meta.error}
                                    </span>
                                  )}
                                </div>
                              )}
                            </Field>
                          </div>
                          <div className="meetup-side-box-place m-b-sm">
                            <p>
                              <b>How to find us</b>
                            </p>
                            <Field
                              name="location"
                              component="input"
                              type="text"
                              label="Meetup location"
                            >
                              {({ input, meta }) => (
                                <div className="field">
                                  <label>Meetup location</label>
                                  <input
                                    className="input"
                                    type="text"
                                    {...input}
                                    placeholder="Meetup location"
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
                          <div className="meetup-side-box-more-info">
                            <p>
                              <b>Additional Info</b>
                            </p>
                            <Field
                              name="shortInfo"
                              component="textarea"
                              type="text"
                              label="Additional Info"
                            >
                              {({ input, meta }) => (
                                <div className="field">
                                  <label className="title">
                                    Additional Info
                                  </label>
                                  <textarea
                                    {...input}
                                    className="textarea"
                                    placeholder="Write Short Info"
                                    rows="3"
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
                        <div className="meetup-side-box-map">
                          <img
                            src="https://cnet2.cbsistatic.com/img/H_zPLL8-QTZOLxJvgHQ1Jkz0EgY=/830x467/2013/07/10/f0bcef02-67c2-11e3-a665-14feb5ca9861/maps_routemap.png"
                            className="venueMap-mapImg span--100"
                            alt="Location image of meetup venue"
                          />
                        </div>
                      </aside>
                    </div>
                    <div className="column is-7 is-offset-1">
                      <div className="content is-medium">
                        <h3 className="title is-3">About the Meetup</h3>
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
                                <span className="help is-danger">
                                  {meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          );
        }}
      />
    </div>
  );
};

export default connect(
  (state) => ({
    meetup: meetupSelector(state),
    loading: loadingMeetupsSelector(state)
  }),
  { fetchMeetupById }
)(PageMeetupEdit);
