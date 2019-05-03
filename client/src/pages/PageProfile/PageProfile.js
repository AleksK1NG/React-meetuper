import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchUserStats,
  meetupsCountSelector,
  postsCountSelector,
  threadsCountSelector,
  userMeetupsSelector,
  userPostsSelector,
  userThreadsSelector
} from '../../ducks/user';
import { userSelector } from '../../ducks/auth';
import Loader from '../../components/shared/Loader/Loader';
import UserMeetupsItem from '../../components/UserProfile/UserMeetupsItem/UserMeetupsItem';

const PageProfile = ({
  user,
  userPosts,
  userThreads,
  userMeetups,
  fetchUserStats,
  meetupsCount,
  postsCount,
  threadsCount
}) => {
  useEffect(() => {
    fetchUserStats();
  }, []);

  if (!user) return <Loader />;

  return (
    <div className="columns">
      <div className="container profile">
        {user ? (
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
        ) : (
          <Loader />
        )}
        <div className="columns is-mobile is-multiline">
          {userMeetups &&
            userMeetups.map((meetup) => (
              <UserMeetupsItem meetup={meetup} key={meetup._id} />
            ))}
        </div>
        <div className="columns is-mobile is-multiline">
          {/*Threads map*/}
          <div className="column is-3-tablet is-6-mobile">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Some title</p>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item">Share</a>
                <a className="card-footer-item">Delete</a>
              </footer>
            </div>
            <br />
          </div>
        </div>
        <div className="columns is-mobile is-multiline">
          {/*Posts map*/}
          <div className="column is-3-tablet is-6-mobile">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Some Text</p>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item">Share</a>
                <a className="card-footer-item">Delete</a>
              </footer>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    user: userSelector(state),
    userPosts: userPostsSelector(state),
    userThreads: userThreadsSelector(state),
    userMeetups: userMeetupsSelector(state),
    meetupsCount: meetupsCountSelector(state),
    postsCount: postsCountSelector(state),
    threadsCount: threadsCountSelector(state)
  }),
  { fetchUserStats }
)(PageProfile);
