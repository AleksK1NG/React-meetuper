import React from 'react';

const MeetupItem = ({ meetup }) => {
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
                  <p className="title">{meetup.startDate}</p>
                  <p className="title">{meetup.startDate}</p>
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

export default MeetupItem;
