import React from 'react';

const MeetupLocation = () => {
  return (
    <div>
      <h1 className="title m-b-sm">What's your new Meetup location?</h1>
      <div className="m-b-lg">
        <span className="subtitle">New York, US</span>
        <a>(change location)</a>
        <input type="text" className="input" />
        <div>
          <span className="help is-danger">Location is required</span>
        </div>
      </div>
    </div>
  );
};

export default MeetupLocation;
