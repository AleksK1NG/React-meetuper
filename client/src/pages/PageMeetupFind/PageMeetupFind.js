import React, { useEffect, Suspense, useState } from 'react';
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
  match,
  fetchAllMeetups,
  meetups,
  loading,
  location,
  getMetaData
}) => {
  const [userLocation, setUserLocation] = useState(() => location || '');
  useEffect(() => {
    getMetaData();
  }, []);

  useEffect(() => {
    const filter = {};
    if (match.params.category) {
      filter['category'] = match.params.category;
    }
    fetchAllMeetups({ filter: filter });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <div className="lookup-prebody">
        <AppHero />
        <MeetupLookupSearch
          fetchAllMeetups={fetchAllMeetups}
          location={location}
          userLocation={userLocation}
          setUserLocation={setUserLocation}
        />
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
