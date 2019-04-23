import React from 'react';

const PageMeetupDetail = ({ match }) => {
  return (
    <div>
      <h2>Page Meetup Detail</h2>
      <p>Meetup ID: {match.params.id}</p>
    </div>
  );
};

export default PageMeetupDetail;
