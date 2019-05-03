import React from 'react';
import UserUpdateModal from '../../UserUpdateModal/UserUpdateModal';

const HeaderSection = ({
  user,
  meetupsCount,
  postsCount,
  threadsCount,
  activeTab,
  setActiveTab
}) => {
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
          </p>
          <UserUpdateModal />
          <br />
          <p className="tagline">{user.info}</p>
        </div>
        <div
          onClick={() => setActiveTab('meetups')}
          className={`stats-tab column is-2-tablet is-4-mobile has-text-centered ${
            activeTab === 'meetups' ? 'isActive' : null
          }`}
        >
          <p className="stat-val">{meetupsCount}</p>
          <p className="stat-key">Meetups</p>
        </div>
        <div
          onClick={() => setActiveTab('threads')}
          className={`stats-tab column is-2-tablet is-4-mobile has-text-centered ${
            activeTab === 'threads' ? 'isActive' : null
          }`}
        >
          <p className="stat-val">{threadsCount}</p>
          <p className="stat-key">Threads</p>
        </div>
        <div
          onClick={() => setActiveTab('posts')}
          className={`stats-tab column is-2-tablet is-4-mobile has-text-centered ${
            activeTab === 'posts' ? 'isActive' : null
          }`}
        >
          <p className="stat-val">{postsCount}</p>
          <p className="stat-key">Posts</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeaderSection);
