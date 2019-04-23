import React from 'react';
import { formatDate } from '../../utils/helpers';

const MeetupItem = ({ meetup }) => {
  console.log('render meetup item');
  return (
    <div className="column is-one-third">
      <div className="card large">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={meetup.image} alt="Image" />
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
              <p className="title is-4 no-padding is-marginless">
                {meetup.title}
              </p>
              <span className="tag is-success">{meetup.category.name}</span>
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
      </div>
    </div>
  );
};

export default React.memo(MeetupItem);
