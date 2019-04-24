import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import AppHero from '../../components/Layout/AppHero/AppHero';
import AppDropdown from '../../components/shared/AppDropdown/AppDropdown';
import {
  allCategoriesSelector,
  fetchAllCategories,
  loadingCatSelector
} from '../../ducks/categories';
// import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Loader from '../../components/shared/Loader/Loader';
import {
  allMeetupsSelector,
  fetchAllMeetups,
  loadingMeetupsSelector
} from '../../ducks/meetups';
import AppSpinner from '../../components/shared/AppSpinner/AppSpinner';

const CategoryItem = React.lazy(() =>
  import('../../components/CategoryItem/CategoryItem')
);

const MeetupItem = React.lazy(() =>
  import('../../components/MeetupItem/MeetupItem')
);

const PageHome = ({
  fetchAllCategories,
  fetchAllMeetups,
  categories,
  meetups,
  loadingCategories,
  loadingMeetups
}) => {
  useEffect(() => {
    fetchAllCategories();
    fetchAllMeetups();
  }, []);

  return (
    <div>
      <AppHero />
      <div className="container">
        <section className="section">
          <div className="m-b-lg">
            <h1 className="title is-inline">Featured Meetups in "Location"</h1>
            <AppDropdown />
            <button className="button is-primary is-pulled-right m-r-sm">
              Create Meetups
            </button>
            <button className="button is-primary is-pulled-right m-r-sm">
              All
            </button>
          </div>
          <div
            className="row columns is-multiline"
            style={{ justifyContent: 'center' }}
          >
            <Suspense fallback={<Loader />}>
              {meetups && !loadingMeetups ? (
                meetups.map((meetup) => (
                  <React.Fragment key={meetup._id}>
                    <MeetupItem meetup={meetup} />
                  </React.Fragment>
                ))
              ) : (
                <Loader />
              )}
            </Suspense>
          </div>
        </section>
        <section className="section">
          <div>
            <h1 className="title">Categories</h1>

            <div
              className="columns cover is-multiline is-mobile"
              style={{ justifyContent: 'center' }}
            >
              <Suspense fallback={<Loader />}>
                {categories && !loadingCategories ? (
                  categories.map((category) => (
                    <React.Fragment key={category._id}>
                      <CategoryItem category={category} />
                    </React.Fragment>
                  ))
                ) : (
                  <Loader />
                )}
              </Suspense>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    categories: allCategoriesSelector(state),
    loadingCategories: loadingCatSelector(state),
    meetups: allMeetupsSelector(state),
    loadingMeetups: loadingMeetupsSelector(state)
  }),
  { fetchAllCategories, fetchAllMeetups }
)(PageHome);
