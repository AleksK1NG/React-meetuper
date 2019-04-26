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

const MeetupFindMainSection = React.lazy(() =>
  import(
    '../../components/MeetupFind/MeetupFindMainSection/MeetupFindMainSection'
  )
);

const PageMeetupFind = ({ fetchAllMeetups, meetups, loading }) => {
  useEffect(() => {
    fetchAllMeetups();
  }, []);

  // if (!meetups) return <Loader />;
  if (loading) return <Loader />;

  return (
    <div>
      <div className="lookup-prebody">
        <AppHero />
        <MeetupLookupSearch />
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
    meetups: allMeetupsSelector(state),
    loading: loadingMeetupsSelector(state)
  }),
  { fetchAllMeetups }
)(PageMeetupFind);
