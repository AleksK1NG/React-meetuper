import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { allMeetupsSelector, fetchAllMeetups } from '../../ducks/meetups';
import AppHero from '../../components/Layout/AppHero/AppHero';
import { Link } from 'react-router-dom';
import { capitalize, formatDate } from '../../utils/helpers';
import Loader from '../../components/shared/Loader/Loader';
import './PageMeetupFind.scss';

const PageMeetupFind = ({ fetchAllMeetups, meetups }) => {
  useEffect(() => {
    fetchAllMeetups();
  }, []);

  if (!meetups) return <Loader />;

  return (
    <div>
      <div className="lookup-prebody">
        <AppHero />
        <div className="meetup-lookup-wrap">
          <div className="meetup-lookup centered">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <input type="text" className="input" placeholder="New York" />
                </div>
                <div className="level-item">
                  <span>Meetups in New York, USA</span>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <button className="button is-medium m-r-sm">Meetups</button>
                  <button className="button is-medium">Calendar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="section page-find">
          <div className="columns cover is-multiline">
            {meetups &&
              meetups.map((meetup) => (
                <div
                  key={meetup._id}
                  className="column is-one-third"
                  style={{ minHeight: '160px' }}
                >
                  <Link
                    to={`/meetups/${meetup._id}`}
                    className="meetup-card-find"
                    style={{
                      'background-image': `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${
                        meetup.image
                      })`
                    }}
                  >
                    <div className="meetup-card-find-content">
                      <div className="meetup-card-find-content-date is-pulled-right">
                        <span className="month">
                          {formatDate(meetup.startDate, 'MMM')}
                        </span>
                        <span className="day">
                          {formatDate(meetup.startDate, 'D')}
                        </span>
                      </div>
                      <div className="meetup-card-find-content-info">
                        <p className="title is-4 no-padding is-marginless m-b-xs">
                          {meetup.title}
                        </p>
                        <span className="tag is-success m-b-xs">
                          {capitalize(meetup.category.name)}
                        </span>
                        <p className="subtitle is-7">{meetup.location}</p>
                      </div>
                      <div className="meetup-card-find-interest">
                        <p className="subtitle is-7">
                          {meetup.joinedPeopleCount}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          <div>
            <span className="tag is-warning is-large">
              No meetups found :( You might try to change search criteria :)
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    meetups: allMeetupsSelector(state)
  }),
  { fetchAllMeetups }
)(PageMeetupFind);
