import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './PageMeetupDetail.scss';
import {
  fetchMeetupById,
  loadingMeetupsSelector,
  meetupSelector
} from '../../ducks/meetups';
import Loader from '../../components/shared/Loader/Loader';
import { fetchThreadsById, threadsSelector } from '../../ducks/threads';
import MeetupDetailHeroSection from '../../components/MeetupDetail/MeetupDetailHeroSection/MeetupDetailHeroSection';
import MeetupDetailMainSection from '../../components/MeetupDetail/MeetupDetailMainSection/MeetupDetailMainSection';

const PageMeetupDetail = ({
  match,
  meetup,
  threads,
  fetchMeetupById,
  fetchThreadsById,
  loading
}) => {
  useEffect(() => {
    fetchMeetupById(match.params.id);
    fetchThreadsById(match.params.id);
  }, []);

  if (!meetup.meetupCreator || !threads || loading) return <Loader />;

  return (
    <div className="meetup-detail-page">
      <MeetupDetailHeroSection meetup={meetup} />
      <MeetupDetailMainSection meetup={meetup} threads={threads} />
    </div>
  );
};

export default connect(
  (state) => ({
    meetup: meetupSelector(state),
    loading: loadingMeetupsSelector(state),
    threads: threadsSelector(state)
  }),
  { fetchMeetupById, fetchThreadsById }
)(PageMeetupDetail);
