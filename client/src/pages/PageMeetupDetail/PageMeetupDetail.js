import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import './PageMeetupDetail.scss';
import {
  fetchMeetupById,
  loadingMeetupsSelector,
  meetupSelector
} from '../../ducks/meetups';
import Loader from '../../components/shared/Loader/Loader';
import {
  fetchThreadsById,
  loadingThreadsSelector,
  threadsSelector
} from '../../ducks/threads';
import { isAuthSelector, userSelector } from '../../ducks/auth';

const MeetupDetailHeroSection = React.lazy(() =>
  import(
    '../../components/MeetupDetail/MeetupDetailHeroSection/MeetupDetailHeroSection'
  )
);
const MeetupDetailMainSection = React.lazy(() =>
  import(
    '../../components/MeetupDetail/MeetupDetailMainSection/MeetupDetailMainSection'
  )
);

const PageMeetupDetail = ({
  match,
  meetup,
  threads,
  fetchMeetupById,
  fetchThreadsById,
  loading,
  loadingThreads,
  isAuthenticated,
  user
}) => {
  useEffect(() => {
    fetchMeetupById(match.params.id);
    fetchThreadsById(match.params.id);
  }, []);

  if (loadingThreads || loading) return <Loader />;

  let isCreator = false;
  let isMember = false;
  let canJoin = false;
  if (user && meetup) {
    isCreator = user._id === meetup.meetupCreator._id;
    isMember = user['joinedMeetups'].includes(meetup._id);
    canJoin = !isCreator && !isMember;
  }

  console.log('PageMeetupDetail CAN JOIN =>', canJoin);

  return (
    <div className="meetup-detail-page">
      <Suspense fallback={<Loader />} />
      <MeetupDetailHeroSection
        isCreator={isCreator}
        meetup={meetup}
        isAuthenticated={isAuthenticated}
        user={user}
      />
      <MeetupDetailMainSection
        canJoin={canJoin}
        isMember={isMember}
        meetup={meetup}
        threads={threads}
        isAuthenticated={isAuthenticated}
        user={user}
      />
    </div>
  );
};

export default connect(
  (state) => ({
    meetup: meetupSelector(state),
    loading: loadingMeetupsSelector(state),
    threads: threadsSelector(state),
    loadingThreads: loadingThreadsSelector(state),
    isAuthenticated: isAuthSelector(state),
    user: userSelector(state)
  }),
  { fetchMeetupById, fetchThreadsById }
)(PageMeetupDetail);
