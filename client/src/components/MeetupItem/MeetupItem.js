import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize, formatDate } from '../../utils/helpers';
import './MeetupItem.scss';

const MeetupItem = ({ meetup }) => {
  return (
    <div className="column is-one-third">
      <div className="card large is-hoverable">
        <Link to={`/meetups/${meetup._id}`} className="card-meetup-link">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={meetup.image} alt={meetup.title} />
            </figure>
          </div>
          <div className="card-content">
            <div className="level m-b-md">
              <div className="media-left">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="title">{formatDate(meetup.startDate, 'MMM')}</p>
                    <p className="title">{formatDate(meetup.startDate, 'D')}</p>
                  </div>
                </div>
              </div>
              <div className="media-content">
                <p className="title is-4 no-padding is-marginless">{meetup.title}</p>
                <span className="tag is-success">{capitalize(meetup.category.name)}</span>
                <p className="subtitle is-7">{meetup.location}</p>
              </div>
            </div>
            <div className="content">
              {meetup.description}
              <div className="background-icon">
                <span className="icon-barcode" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(MeetupItem);
