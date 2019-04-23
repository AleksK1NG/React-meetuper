import React from 'react';

const PageHome = (props) => {
  return (
    <div>
      <div className="container">
        <section className="section">
          <button className="button is-primary is-pulled-right m-r-sm">
            Create Meetups
          </button>
          <button className="button is-primary is-pulled-right m-r-sm">
            All
          </button>
        </section>
      </div>
    </div>
  );
};

export default PageHome;
