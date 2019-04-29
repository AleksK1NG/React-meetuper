import React from 'react';

const MeetupDescription = () => {
  return (
    <form className="m-b-md">
      <div className="field">
        <label className="title">Image</label>
        <input className="input" type="text" placeholder="Image URL" />
        <div>
          <span className="help is-danger">Username is required</span>
        </div>
      </div>
      <div className="field">
        <label className="title">Additional Info</label>
        <textarea
          className="textarea"
          placeholder="Write Short Info"
          rows="3"
        />
        <div>
          <span className="help is-danger">Additional info is required</span>
        </div>
      </div>
      <div className="field">
        <label className="title">Long Description</label>
        <textarea
          className="textarea"
          placeholder="Write description"
          rows="10"
        />
        <div>
          <span className="help is-danger">Description is required</span>
        </div>
      </div>
    </form>
  );
};

export default MeetupDescription;
