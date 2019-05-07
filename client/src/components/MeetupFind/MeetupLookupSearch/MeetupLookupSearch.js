import React from 'react';

const MeetupLookupSearch = ({
  history,
  category,
  location,
  userLocation,
  setUserLocation,
  fetchAllMeetups
}) => {
  const fetchMeetups = (e) => {
    // setUserLocation(e.target.value);

    const filter = {};
    if (userLocation) {
      filter['location'] = userLocation
        .toLowerCase()
        .replace(/[\s,]+/g, '')
        .trim();
    }

    if (e.key === 'Enter') {
      fetchAllMeetups({ filter: filter });
    }
  };

  const cancelCategorySearch = () => {
    history.push('/find');
    fetchAllMeetups();
  };

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
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
                onKeyUp={(e) => fetchMeetups(e)}
              />
            </div>
            <div className="level-item">
              <span>{location && `Your current location is ${location}`}</span>
            </div>
            {category && (
              <div className="level-item">
                <button
                  onClick={cancelCategorySearch}
                  className="button is-danger"
                >
                  {category} X
                </button>
              </div>
            )}
          </div>
          <div className="level-right">
            <div className="level-item">
              <button type="submit" className="button is-medium m-r-sm">
                Meetups
              </button>
              <button className="button is-medium">Calendar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetupLookupSearch;
