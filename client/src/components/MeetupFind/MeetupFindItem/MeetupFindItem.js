import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize, formatDate } from '../../../utils/helpers';

const MeetupFindItem = ({ meetup }) => {
  return (
    <div
      key={meetup._id}
      className="column is-one-third"
      style={{ minHeight: '160px' }}
    >
      <Link
        to={`/meetups/${meetup._id}`}
        className="meetup-card-find"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${
            meetup.image
          })`
        }}
      >
        <div className="meetup-card-find-content">
          <div className="meetup-card-find-content-date is-pulled-right">
            <span className="month">{formatDate(meetup.startDate, 'MMM')}</span>
            <span className="day">{formatDate(meetup.startDate, 'D')}</span>
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
            <p className="subtitle is-7">{meetup.joinedPeopleCount}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(MeetupFindItem);
