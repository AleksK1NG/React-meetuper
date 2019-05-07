import React from 'react';

const UserThreadsItem = ({ thread }) => {
  return (
    <div className="column is-3-tablet is-6-mobile">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{thread.title}</p>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a href="foo" className="card-footer-item">
            Share
          </a>
          <a href="foo" className="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
      <br />
    </div>
  );
};

export default React.memo(UserThreadsItem);
