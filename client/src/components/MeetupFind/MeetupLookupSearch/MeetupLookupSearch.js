import React from 'react';

const MeetupLookupSearch = () => {
  return (
    <div className="meetup-lookup-wrap">
      <div className="meetup-lookup centered">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <input type="text" className="input" placeholder="New York" />
            </div>
            <div className="level-item">
              <span>Meetups in New York, USA</span>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <button className="button is-medium m-r-sm">Meetups</button>
              <button className="button is-medium">Calendar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetupLookupSearch;
