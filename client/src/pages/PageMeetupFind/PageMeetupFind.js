import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  allMeetupsSelector,
  fetchAllMeetups,
  loadingMeetupsSelector
} from '../../ducks/meetups';
import AppHero from '../../components/Layout/AppHero/AppHero';
import Loader from '../../components/shared/Loader/Loader';
import './PageMeetupFind.scss';
// import MeetupFindMainSection from '../../components/MeetupFind/MeetupFindMainSection/MeetupFindMainSection';
import MeetupLookupSearch from '../../components/MeetupFind/MeetupLookupSearch/MeetupLookupSearch';
import { getMetaData, locationSelector } from '../../ducks/meta';

const MeetupFindMainSection = React.lazy(() =>
  import(
    '../../components/MeetupFind/MeetupFindMainSection/MeetupFindMainSection'
  )
);

const PageMeetupFind = ({
  fetchAllMeetups,
  meetups,
  loading,
  location,
  getMetaData
}) => {
  useEffect(() => {
    fetchAllMeetups();
    getMetaData();
  }, []);

  // if (!meetups) return <Loader />;
  if (loading) return <Loader />;

  return (
    <div>
      <div className="lookup-prebody">
        <AppHero />
        <MeetupLookupSearch location={location} />
      </div>
      <div className="container">
        <Suspense fallback={<Loader />}>
          <MeetupFindMainSection meetups={meetups} />
        </Suspense>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    location: locationSelector(state),
    meetups: allMeetupsSelector(state),
    loading: loadingMeetupsSelector(state)
  }),
  { fetchAllMeetups, getMetaData }
)(PageMeetupFind);
