import React, { useEffect, Suspense, useState } from 'react';
import { connect } from 'react-redux';
import './PageMeetupDetail.scss';
import {
  canJoinMeetupSelector,
  fetchMeetupById,
  isMemberSelector,
  loadingMeetupsSelector,
  mCreatorSelector,
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
  isCanJoinMeetup,
  isMeetupMember,
  isMeetupCreator,
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
  //
  // let isCreator = false;
  // let isMember = false;
  // let canJoin = false;
  // if (user && meetup) {
  //   isCreator = user._id === meetup.meetupCreator._id;
  //   isMember = user['joinedMeetups'].includes(meetup._id);
  //   canJoin = !isCreator && !isMember;
  // }

  console.log('PageMeetupDetail IS CAN JOIN =>', isCanJoinMeetup);

  return (
    <div className="meetup-detail-page">
      <Suspense fallback={<Loader />} />
      <MeetupDetailHeroSection
        isMeetupCreator={isMeetupCreator}
        meetup={meetup}
        isAuthenticated={isAuthenticated}
      />
      <MeetupDetailMainSection
        canJoin={isCanJoinMeetup}
        isMember={isMeetupMember}
        meetup={meetup}
        threads={threads}
        isAuthenticated={isAuthenticated}
        user={user}
      />
    </div>
  );
};

export default connect(
  (state, { user }) => ({
    isCanJoinMeetup: canJoinMeetupSelector(state),
    isMeetupCreator: mCreatorSelector(state),
    isMeetupMember: isMemberSelector(state),
    meetup: meetupSelector(state),
    loading: loadingMeetupsSelector(state),
    threads: threadsSelector(state),
    loadingThreads: loadingThreadsSelector(state),
    isAuthenticated: isAuthSelector(state),
    user: userSelector(state)
  }),
  { fetchMeetupById, fetchThreadsById }
)(PageMeetupDetail);
