import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './PageMeetupEdit.scss';
import {
  fetchMeetupById,
  loadingMeetupsSelector,
  meetupSelector
} from '../../ducks/meetups';
import Loader from '../../components/shared/Loader/Loader';

const PageMeetupEdit = ({ meetup, loading, match, fetchMeetupById }) => {
  useEffect(() => {
    fetchMeetupById(match.params.id);
  }, []);

  if (loading || !meetup) return <Loader />;
  return (
    <div className="meetup-detail-page">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h2 className="subtitle">Some Date</h2>
            <div className="field">
              {meetup.title}
              <input className="title input w-50" type="text" />
            </div>
            <article className="media v-center">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img className="is-rounded" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    Created by <strong>Name Here</strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="is-pulled-right">
            <button className="button is-success is-large">Update</button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <aside className="is-medium menu">
                <div className="meetup-side-box">
                  <div className="meetup-side-box-date m-b-sm">
                    <p>
                      <b>Time</b>
                    </p>

                    <input type="date" />
                    <div className="field m-t-md">
                      <input type="time" />
                    </div>
                    <div className="field">
                      <input type="time" />
                    </div>
                  </div>
                  <div className="meetup-side-box-place m-b-sm">
                    <p>
                      <b>How to find us</b>
                    </p>
                    <div className="field">
                      <input className="input" type="text" />
                    </div>
                  </div>
                  <div className="meetup-side-box-more-info">
                    <p>
                      <b>Additional Info</b>
                    </p>
                    <div className="field">
                      <textarea className="textarea" rows="5" />
                    </div>
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
                <textarea className="textarea" rows="5" />
              </div>
            </div>
          </div>
        </div>
      </section>
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
