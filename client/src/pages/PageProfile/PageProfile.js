import React from 'react';

const PageProfile = () => {
  return (
    <div className="columns">
      <div className="container profile">
        <div className="section profile-heading">
          <div className="columns is-mobile is-multiline">
            <div className="column is-2">
              <figure className="image  header-icon user-profile-image">
                <img className="is-rounded" src="" />
              </figure>
            </div>
            <div className="column is-4-tablet is-10-mobile name">
              <p>
                <span className="title is-bold">Alex Example</span>
                <br />
                <button className="button is-primary is-outlined m-t-sm">
                  Update Info
                </button>
                <br />
              </p>
              <p className="tagline">
                I am very productive and good programmer
              </p>
            </div>
            <div className="stats-tab column is-2-tablet is-4-mobile has-text-centered">
              <p className="stat-val">2</p>
              <p className="stat-key">Meetups</p>
            </div>
            <div className="stats-tab column is-2-tablet is-4-mobile has-text-centered">
              <p className="stat-val">4</p>
              <p className="stat-key">Threads</p>
            </div>
            <div className="stats-tab column is-2-tablet is-4-mobile has-text-centered">
              <p className="stat-val">3</p>
              <p className="stat-key">Posts</p>
            </div>
          </div>
        </div>
        <div className="columns is-mobile is-multiline">
          <div className="column is-3-tablet is-6-mobile">
            {/*Threads*/}
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Nice Meetup</p>
                    <p className="subtitle is-6">
                      <span className="tag is-dark subtitle">Sport</span>
                    </p>
                  </div>
                </div>
                <div className="content">
                  <p>Some short info</p>
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item">Share</a>
                <a className="card-footer-item">Delete</a>
              </footer>
            </div>
            <br />
          </div>
        </div>
        <div className="columns is-mobile is-multiline">
          {/*Threads map*/}
          <div className="column is-3-tablet is-6-mobile">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Some title</p>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item">Share</a>
                <a className="card-footer-item">Delete</a>
              </footer>
            </div>
            <br />
          </div>
        </div>
        <div className="columns is-mobile is-multiline">
          {/*Posts map*/}
          <div className="column is-3-tablet is-6-mobile">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Some Text</p>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item">Share</a>
                <a className="card-footer-item">Delete</a>
              </footer>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageProfile;
