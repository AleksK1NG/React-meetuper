import React from 'react';

const HeaderSection = ({ user, meetupsCount, postsCount, threadsCount }) => {
  return (
    <div className="section profile-heading">
      <div className="columns is-mobile is-multiline">
        <div className="column is-2">
          <figure className="image  header-icon user-profile-image">
            <img className="is-rounded" src={user.avatar} />
          </figure>
        </div>
        <div className="column is-4-tablet is-10-mobile name">
          <p>
            <span className="title is-bold">{user.name}</span>
            <br />
            <button className="button is-primary is-outlined m-t-sm">
              Update Info
            </button>
            <br />
          </p>
          <p className="tagline">{user.info}</p>
        </div>
        <div className="stats-tab column is-2-tablet is-4-mobile has-text-centered">
          <p className="stat-val">{meetupsCount}</p>
          <p className="stat-key">Meetups</p>
        </div>
        <div className="stats-tab column is-2-tablet is-4-mobile has-text-centered">
          <p className="stat-val">{threadsCount}</p>
          <p className="stat-key">Threads</p>
        </div>
        <div className="stats-tab column is-2-tablet is-4-mobile has-text-centered">
          <p className="stat-val">{postsCount}</p>
          <p className="stat-key">Posts</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeaderSection);
