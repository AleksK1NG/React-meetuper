import React from 'react';
import './MeetupDetail.scss';

const MeetupDetail = () => {
  return (
    <form>
      <div className="field">
        <label className="title m-b-sm">Choose Title</label>
        <input className="input" type="text" placeholder="Enter Title" />
        <div>
          <span className="help is-danger">Title is required</span>
        </div>
      </div>
      <div className="field">
        <label className="title m-b-sm">Starts At</label>
        <input className="input" type="text" placeholder="Starts At" />
        <div>
          <span className="help is-danger">Starts at is required</span>
        </div>
      </div>
      <div className="field">
        <label className="title m-b-sm">From</label>
        <input className="input" type="text" placeholder="Time From" />
      </div>
      <div className="field">
        <label className="title m-b-sm">To</label>
        <input className="input" type="text" placeholder="Time to" />
      </div>
      <div className="field">
        <label className="title m-b-sm">Please Choose the Category.</label>
        <div className="m-b-lg">
          <div className="select">
            <select>
              <option value="category">Category name</option>
            </select>
          </div>
          <div>
            <span className="help is-danger">Category is required</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MeetupDetail;
