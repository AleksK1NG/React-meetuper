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

const CategoryItem = React.lazy(() =>
  import('../../components/CategoryItem/CategoryItem')
);

const PageHome = ({ fetchAllCategories, categories, loading }) => {
  useEffect(() => {
    fetchAllCategories();
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
          <div className="row columns">
            <div className="column is-one-third">
              <div className="card large">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop="
                      alt="Image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="level m-b-md">
                    <div className="media-left">
                      <div className="level-item has-text-centered">
                        <div>
                          <p className="title">JAN</p>
                          <p className="title">16</p>
                        </div>
                      </div>
                    </div>
                    <div className="media-content">
                      <p className="title is-4 no-padding is-marginless">
                        Beer and Burger in Hamburg
                      </p>
                      <span className="tag is-success">Music</span>
                      <p className="subtitle is-7">
                        Tomorrow · Times Square · 05201
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    The Beast stumbled in the dark for it could no longer see
                    the path...
                    <div className="background-icon">
                      <span className="icon-twitter" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card large">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://source.unsplash.com/uzDLtlPY8kQ"
                      alt="Image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="level m-b-md">
                    <div className="media-left">
                      <div className="level-item has-text-centered">
                        <div>
                          <p className="title">JAN</p>
                          <p className="title">16</p>
                        </div>
                      </div>
                    </div>
                    <div className="media-content">
                      <p className="title is-4 no-padding is-marginless">
                        Beer and Burger in Hamburg
                      </p>
                      <span className="tag is-success">Music</span>
                      <p className="subtitle is-7">
                        Tomorrow · Times Square · 05201
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    The Beast stumbled in the dark for it could no longer see
                    the path...
                    <div className="background-icon">
                      <span className="icon-facebook" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card large">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://source.unsplash.com/pe_R74hldW4"
                      alt="Image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="level m-b-md">
                    <div className="media-left">
                      <div className="level-item has-text-centered">
                        <div>
                          <p className="title">JAN</p>
                          <p className="title">16</p>
                        </div>
                      </div>
                    </div>
                    <div className="media-content">
                      <p className="title is-4 no-padding is-marginless">
                        Beer and Burger in Hamburg
                      </p>
                      <span className="tag is-success">Music</span>
                      <p className="subtitle is-7">
                        Tomorrow · Times Square · 05201
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    The Beast stumbled in the dark for it could no longer see
                    the path...
                    <div className="background-icon">
                      <span className="icon-barcode" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    loading: loadingCatSelector(state)
  }),
  { fetchAllCategories }
)(PageHome);
