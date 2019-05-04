import React, { useState } from 'react';

const MeetupLookupSearch = ({ location }) => {
  const [userLocation, setUserLocation] = useState(() => location);

  return (
    <div className="meetup-lookup-wrap">
      <div className="meetup-lookup centered">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <input
                type="text"
                className="input"
                placeholder="New York"
                value={userLocation !== '' ? userLocation : location}
                onChange={(e) => setUserLocation(e.target.value)}
              />
            </div>
            <div className="level-item">
              <span>Meetups {location !== '' && `in ${location}`}</span>
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
