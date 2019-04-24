import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../../utils/helpers';
import './PageMeetupDetail.scss';
import {
  fetchMeetupById,
  loadingMeetupsSelector,
  meetupSelector
} from '../../ducks/meetups';
import Loader from '../../components/shared/Loader/Loader';
import { fetchThreadsById, threadsSelector } from '../../ducks/threads';
import ThreadItem from '../../components/ThreadItem/ThreadItem';

const PageMeetupDetail = ({
  match,
  meetup,
  threads,
  fetchMeetupById,
  fetchThreadsById,
  loading
}) => {
  useEffect(() => {
    fetchMeetupById(match.params.id);
    fetchThreadsById(match.params.id);
  }, []);

  if (!meetup.meetupCreator || !threads || loading) return <Loader />;

  return (
    <div className="meetup-detail-page">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h2 className="subtitle">{formatDate(meetup.startDate)}</h2>
            <h1 className="title">{meetup.title}</h1>
            <article className="media v-center">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img
                    className="is-rounded"
                    src={meetup.meetupCreator.avatar}
                    alt="image"
                  />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    Created by <strong> {meetup.meetupCreator.name} </strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="is-pulled-right">
            <button className="button is-danger">Leave Group</button>
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
                      <b>Date</b>
                    </p>
                    <p>{formatDate(meetup.startDate)}</p>
                  </div>
                  <div className="meetup-side-box-date m-b-sm">
                    <p>
                      <b>Time</b>
                    </p>
                    <span>{meetup.timeFrom}</span> -{' '}
                    <span>{meetup.timeTo}</span>
                  </div>
                  <div className="meetup-side-box-place m-b-sm">
                    <p>
                      <b>How to find us</b>
                    </p>
                    <p>{meetup.location}</p>
                  </div>
                  <div className="meetup-side-box-more-info">
                    <p>
                      <b>Additional Info</b>
                    </p>
                    <p>{meetup.shortInfo}</p>
                  </div>
                </div>
                <div className="meetup-side-box-map">
                  <img
                    src="https://cnet2.cbsistatic.com/img/H_zPLL8-QTZOLxJvgHQ1Jkz0EgY=/830x467/2013/07/10/f0bcef02-67c2-11e3-a665-14feb5ca9861/maps_routemap.png"
                    className="venueMap-mapImg span--100"
                    alt="Location image of meetup venue"
                  />
                </div>

                {/**************************** Threads Titles Section ****************************/}

                <p className="menu-label">Threads</p>
                <ul>
                  {threads &&
                    threads.map((thread) => (
                      <li key={thread._id}>{thread.title}</li>
                    ))}
                </ul>

                <p className="menu-label">Who is Going</p>
                <div className="columns is-multiline is-mobile">
                  {meetup &&
                    meetup.joinedPeople.map((p) => (
                      <div className="column is-3" key={p._id}>
                        <figure className="image is-64x64">
                          <img
                            className="is-rounded"
                            src={p.avatar}
                            alt="Image"
                          />
                        </figure>
                      </div>
                    ))}
                </div>
              </aside>
            </div>
            <div className="column is-7 is-offset-1">
              <div className="content is-medium">
                <h3 className="title is-3">About the Meetup</h3>
                <p>{meetup.description}</p>
                <button className="button is-primary">Join In</button>
              </div>
              <div className="content is-medium">
                <h3 className="title is-3">Threads</h3>
                {/**************************** Threads Section ****************************/}

                {threads &&
                  threads.map((thread) => (
                    <ThreadItem thread={thread} key={thread._id} />
                  ))}
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
    loading: loadingMeetupsSelector(state),
    threads: threadsSelector(state)
  }),
  { fetchMeetupById, fetchThreadsById }
)(PageMeetupDetail);
