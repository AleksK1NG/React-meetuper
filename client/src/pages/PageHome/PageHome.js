import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AppHero from '../../components/shared/AppHero/AppHero';
import AppDropdown from '../../components/shared/AppDropdown/AppDropdown';
import {
  allCategoriesSelector,
  fetchAllCategories
} from '../../ducks/categories';

const PageHome = ({ fetchAllCategories, categories }) => {
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
              <div className="column is-one-quarter">
                <a href="#">
                  <span className="is-primary is-top is-medium tooltip">
                    <figure className="image is-4by3 imageFade">
                      <img
                        className="is-rounded"
                        src="https://images.unsplash.com/photo-1508355991726-ebd81e4802f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"
                        alt=""
                      />
                    </figure>
                    <div className="subtitle m-t-xs bold">Sport</div>
                  </span>
                </a>
              </div>
              <div className="column is-one-quarter is-rounded">
                <a href="#">
                  <span className="is-primary is-top is-medium tooltip">
                    <figure className="image is-4by3 imageFade">
                      <img
                        className="is-rounded"
                        src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        alt=""
                      />
                    </figure>
                    <div className="subtitle m-t-xs bold">Movies</div>
                  </span>
                </a>
              </div>
              <div className="column is-one-quarter is-rounded">
                <a href="#">
                  <span className="is-primary is-top is-medium tooltip">
                    <figure className="image is-4by3 imageFade">
                      <img
                        className="is-rounded"
                        src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
                        alt=""
                      />
                    </figure>
                    <div className="subtitle m-t-xs bold">Music</div>
                  </span>
                </a>
              </div>
              <div className="column is-one-quarter is-rounded">
                <a href="#">
                  <span className="is-primary is-top is-medium tooltip">
                    <figure className="image is-4by3 imageFade">
                      <img
                        className="is-rounded"
                        src="https://images.unsplash.com/photo-1509670811615-bb8b07cb3caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80"
                        alt=""
                      />
                    </figure>
                    <div className="subtitle m-t-xs bold">Dance</div>
                  </span>
                </a>
              </div>
              <div className="column is-one-quarter is-rounded">
                <a href="#">
                  <span className="is-primary is-top is-medium tooltip">
                    <figure className="image is-4by3 imageFade">
                      <img
                        className="is-rounded"
                        src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                        alt=""
                      />
                    </figure>
                    <div className="subtitle m-t-xs bold">Party</div>
                  </span>
                </a>
              </div>
              <div className="column is-one-quarter is-rounded">
                <a href="#">
                  <span className="is-primary is-top is-medium tooltip">
                    <figure className="image is-4by3 imageFade">
                      <img
                        className="is-rounded"
                        src="https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                        alt=""
                      />
                    </figure>
                    <div className="subtitle m-t-xs bold">Books</div>
                  </span>
                </a>
              </div>
              <div className="column is-one-quarter is-rounded">
                <a href="#">
                  <span className="is-primary is-top is-medium tooltip">
                    <figure className="image is-4by3 imageFade">
                      <img
                        className="is-rounded"
                        src="https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1542&q=80"
                        alt=""
                      />
                    </figure>
                    <div className="subtitle m-t-xs bold">Food</div>
                  </span>
                </a>
              </div>
              <div className="column is-one-quarter is-rounded">
                <a href="#">
                  <span className="is-primary is-top is-medium tooltip">
                    <figure className="image is-4by3 imageFade">
                      <img
                        className="is-rounded"
                        src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                        alt=""
                      />
                    </figure>
                    <div className="subtitle m-t-xs bold">Games</div>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    categories: allCategoriesSelector(state)
  }),
  { fetchAllCategories }
)(PageHome);
