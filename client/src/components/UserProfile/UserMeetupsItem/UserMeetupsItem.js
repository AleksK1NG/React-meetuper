import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../../../utils/helpers';

const UserMeetupsItem = ({ meetup }) => {
  return (
    <div className="column is-3-tablet is-6-mobile">
      {/*Threads*/}
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={meetup.image} alt={meetup.title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{meetup.title}</p>
              <p className="subtitle is-6">
                <span className="tag is-dark subtitle">{capitalize(meetup.category.name)}</span>
              </p>
            </div>
          </div>
          <div className="content">
            <p>{meetup.shortInfo}</p>
          </div>
        </div>
        <footer className="card-footer">
          <Link to={`/meetups/${meetup._id}/edit`} className="card-footer-item">
            Edit
          </Link>
          <Link to={`/meetups/${meetup._id}`} className="card-footer-item">
            Look
          </Link>
        </footer>
      </div>
      <br />
    </div>
  );
};

export default React.memo(UserMeetupsItem);
