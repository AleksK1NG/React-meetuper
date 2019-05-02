import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import './PageMeetupDetail.scss';
import {
  canJoinMeetupSelector,
  fetchMeetupById,
  isMemberSelector,
  joinMeetup,
  leaveMeetup,
  loadingMeetupsSelector,
  meetupSelector
} from '../../ducks/meetups';
import Loader from '../../components/shared/Loader/Loader';
import {
  fetchThreadsById,
  loadingThreadsSelector,
  threadsSelector
} from '../../ducks/threads';
import { isAuthenticatedSelector, userSelector } from '../../ducks/auth';

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
  leaveMeetup,
  joinMeetup,
  isCanJoinMeetup,
  isMeetupMember,
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

  return (
    <div className="meetup-detail-page">
      <Suspense fallback={<Loader />} />
      <MeetupDetailHeroSection
        leaveMeetup={leaveMeetup}
        isMeetupMember={isMeetupMember}
        meetup={meetup}
      />
      <MeetupDetailMainSection
        joinMeetup={joinMeetup}
        isCanJoinMeetup={isCanJoinMeetup}
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
    isCanJoinMeetup: canJoinMeetupSelector(state),
    isMeetupMember: isMemberSelector(state),
    meetup: meetupSelector(state),
    loading: loadingMeetupsSelector(state),
    threads: threadsSelector(state),
    loadingThreads: loadingThreadsSelector(state),
    isAuthenticated: isAuthenticatedSelector(state),
    user: userSelector(state)
  }),
  { fetchMeetupById, fetchThreadsById, joinMeetup, leaveMeetup }
)(PageMeetupDetail);
