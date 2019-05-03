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
import UserThreadsItem from '../../components/UserProfile/UserThreadsItem/UserThreadsItem';
import UserPostsItem from '../../components/UserProfile/UserPostsItem/UserPostsItem';
import HeaderSection from '../../components/UserProfile/HeaderSection/HeaderSection';

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
          <HeaderSection
            user={user}
            meetupsCount={meetupsCount}
            postsCount={postsCount}
            threadsCount={threadsCount}
          />
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
          {userThreads &&
            userThreads.map((thread) => (
              <UserThreadsItem thread={thread} key={thread._id} />
            ))}
        </div>
        <div className="columns is-mobile is-multiline">
          {/*Posts map*/}
          {userPosts &&
            userPosts.map((post) => (
              <UserPostsItem post={post} key={post._id} />
            ))}
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
