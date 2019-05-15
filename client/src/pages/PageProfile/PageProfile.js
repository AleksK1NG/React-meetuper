import React, { useEffect, Suspense, useState } from 'react';
import { connect } from 'react-redux';
import {
  meetupsCountSelector,
  postsCountSelector,
  threadsCountSelector,
  userMeetupsSelector,
  userPostsSelector,
  userThreadsSelector
} from '../../ducks/userModule/userSelectors';
import { userSelector } from '../../ducks/authModule/authSelectors';
import Loader from '../../components/shared/Loader/Loader';
import { fetchUserStats } from '../../ducks/userModule/userActions';

const UserMeetupsItem = React.lazy(() => import('../../components/UserProfile/UserMeetupsItem/UserMeetupsItem'));
const UserPostsItem = React.lazy(() => import('../../components/UserProfile/UserPostsItem/UserPostsItem'));
const UserThreadsItem = React.lazy(() => import('../../components/UserProfile/UserThreadsItem/UserThreadsItem'));
const HeaderSection = React.lazy(() => import('../../components/UserProfile/HeaderSection/HeaderSection'));

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
  const [activeTab, setActiveTab] = useState('meetups');
  useEffect(() => {
    fetchUserStats();
  }, []);

  if (!user) return <Loader />;

  return (
    <div className="columns">
      <div className="container profile">
        <Suspense fallback={<Loader />}>
          {user && (
            <HeaderSection
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              user={user}
              meetupsCount={meetupsCount}
              postsCount={postsCount}
              threadsCount={threadsCount}
            />
          )}
          {activeTab === 'meetups' && (
            <div className="columns is-mobile is-multiline">
              {userMeetups && userMeetups.map((meetup) => <UserMeetupsItem meetup={meetup} key={meetup._id} />)}
            </div>
          )}
          {activeTab === 'threads' && (
            <div className="columns is-mobile is-multiline">
              {userThreads && userThreads.map((thread) => <UserThreadsItem thread={thread} key={thread._id} />)}
            </div>
          )}
          {activeTab === 'posts' && (
            <div className="columns is-mobile is-multiline">
              {/*Posts map*/}
              {userPosts && userPosts.map((post) => <UserPostsItem post={post} key={post._id} />)}
            </div>
          )}
        </Suspense>
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
