import React from 'react';

const UserMeetupsItem = ({ meetup }) => {
  return (
    <div className="column is-3-tablet is-6-mobile">
      {/*Threads*/}
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={meetup.image} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{meetup.title}</p>
              <p className="subtitle is-6">
                <span className="tag is-dark subtitle">
                  {meetup.category.name}
                </span>
              </p>
            </div>
          </div>
          <div className="content">
            <p>{meetup.shortInfo}</p>
          </div>
        </div>
        <footer className="card-footer">
          <a className="card-footer-item">Share</a>
          <a className="card-footer-item">Delete</a>
        </footer>
      </div>
      <br />
    </div>
  );
};

export default React.memo(UserMeetupsItem);
