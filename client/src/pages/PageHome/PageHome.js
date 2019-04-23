import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import AppHero from '../../components/shared/AppHero/AppHero';
import AppDropdown from '../../components/shared/AppDropdown/AppDropdown';
import {
  allCategoriesSelector,
  fetchAllCategories,
  loadingCatSelector
} from '../../ducks/categories';
// import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Loader from '../../components/shared/Loader/Loader';
import { allMeetupsSelector, fetchAllMeetups } from '../../ducks/meetups';

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
  loading
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
          <div className="row columns is-multiline">
            {meetups &&
              meetups.map((meetup) => (
                <React.Fragment key={meetup._id}>
                  <MeetupItem meetup={meetup} />
                </React.Fragment>
              ))}
          </div>
        </section>
        <section className="section">
          <div>
            <h1 className="title">Categories</h1>

            <div className="columns cover is-multiline is-mobile">
              <Suspense fallback={<Loader />}>
                {categories && !loading ? (
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
    loading: loadingCatSelector(state),
    meetups: allMeetupsSelector(state)
  }),
  { fetchAllCategories, fetchAllMeetups }
)(PageHome);
