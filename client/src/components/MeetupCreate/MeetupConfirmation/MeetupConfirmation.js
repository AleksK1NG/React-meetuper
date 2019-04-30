import React from 'react';
import './MeetupConfirmation.scss';
import moment from 'moment';

const MeetupConfirmation = ({ values, categories }) => {
  return (
    <div>
      <h1 className="title m-b-sm">Please confirm entered data</h1>

      <div className="content">
        <div>
          <span className="result-title">Location</span>
          <p>{values.location}</p>
        </div>
        <div>
          <span className="result-title">Title</span>
          <p>{values.title}</p>
        </div>
        <div>
          <span className="result-title">Start Date</span>
          <p>{moment(values.startDate).format()}</p>
        </div>
        <div>
          <span className="result-title">From</span>
          <p>{values.timeFrom}</p>
        </div>
        <div>
          <span className="result-title">To</span>
          <p>{values.timeTo}</p>
        </div>
        <div>
          <span className="result-title">Image</span>
          <p>{values.image}</p>
        </div>
        <div>
          <span className="result-title">Short Info</span>
          <p>{values.shortInfo}</p>
        </div>
        <div>
          <span className="result-title">Description</span>
          <p>{values.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MeetupConfirmation;
