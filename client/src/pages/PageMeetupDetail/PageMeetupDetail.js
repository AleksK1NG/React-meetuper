import React, { useEffect, Suspense, useState } from 'react';
import { connect } from 'react-redux';
import './PageMeetupDetail.scss';
import { fetchMeetupById, joinMeetup, leaveMeetup } from '../../ducks/meetupsModule/meetupsActions';
import {
  canJoinMeetupSelector,
  isMemberSelector,
  loadingMeetupsSelector,
  meetupCreatorSelector,
  meetupSelector
} from '../../ducks/meetupsModule/meetupsSelectors';
import Loader from '../../components/shared/Loader/Loader';
import {
  isAllDataLoadedSelector,
  loadingThreadsSelector,
  threadsSelector
} from '../../ducks/threadsModule/threadsSelectors';
import { isAuthenticatedSelector, userSelector } from '../../ducks/authModule/authSelectors';
import { fetchThreadsById } from '../../ducks/threadsModule/threadsActions';

const MeetupDetailHeroSection = React.lazy(() =>
  import('../../components/MeetupDetail/MeetupDetailHeroSection/MeetupDetailHeroSection')
);
const MeetupDetailMainSection = React.lazy(() =>
  import('../../components/MeetupDetail/MeetupDetailMainSection/MeetupDetailMainSection')
);

const PageMeetupDetail = ({
  isAllDataLoaded,
  isMeetupCreator,
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
  const [threadPageNum, setThreadPageNum] = useState(2);

  useEffect(() => {
    fetchMeetupById(match.params.id);
    fetchThreadsById(match.params.id, 1, true);
  }, []);

  const getMoreThreadPages = () => {
    fetchThreadsById(match.params.id, threadPageNum, false);
    setThreadPageNum(threadPageNum + 1);
  };

  if (loadingThreads || loading) return <Loader />;

  return (
    <div className="meetup-detail-page">
      <Suspense fallback={<Loader />}>
        <MeetupDetailHeroSection leaveMeetup={leaveMeetup} isMeetupMember={isMeetupMember} meetup={meetup} />
        <MeetupDetailMainSection
          isAllDataLoaded={isAllDataLoaded}
          getMoreThreadPages={getMoreThreadPages}
          isMeetupCreator={isMeetupCreator}
          isMeetupMember={isMeetupMember}
          joinMeetup={joinMeetup}
          isCanJoinMeetup={isCanJoinMeetup}
          meetup={meetup}
          threads={threads}
          isAuthenticated={isAuthenticated}
          user={user}
        />
      </Suspense>
    </div>
  );
};

export default connect(
  (state) => ({
    isAllDataLoaded: isAllDataLoadedSelector(state),
    isMeetupCreator: meetupCreatorSelector(state),
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
