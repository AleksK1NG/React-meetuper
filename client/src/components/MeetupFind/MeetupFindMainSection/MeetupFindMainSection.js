import React, { Suspense } from 'react';

const MeetupFindItem = React.lazy(() =>
  import('../MeetupFindItem/MeetupFindItem')
);

const MeetupFindMainSection = ({ meetups }) => {
  return (
    <section className="section page-find">
      <div className="columns cover is-multiline">
        {meetups &&
          meetups.map((meetup) => (
            <React.Fragment key={meetup._id}>
              <Suspense fallback={<p>Loading...</p>}>
                <MeetupFindItem meetup={meetup} />
              </Suspense>
            </React.Fragment>
          ))}
      </div>
      <div>
        {meetups.length === 0 && (
          <span className="tag is-warning is-large">
            No meetups found :( You might try to change search criteria :)
          </span>
        )}
      </div>
    </section>
  );
};

export default React.memo(MeetupFindMainSection);
