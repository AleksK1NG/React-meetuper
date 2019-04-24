import React from 'react';
import { formatDate } from '../../../utils/helpers';
import PersonItemAvatar from '../PersonItemAvatar/PersonItemAvatar';

const MeetupDetailAside = ({ meetup, threads }) => {
  return (
    <aside className="is-medium menu">
      <div className="meetup-side-box">
        <div className="meetup-side-box-date m-b-sm">
          <p>
            <b>Date</b>
          </p>
          <p>{formatDate(meetup.startDate)}</p>
        </div>
        <div className="meetup-side-box-date m-b-sm">
          <p>
            <b>Time</b>
          </p>
          <span>{meetup.timeFrom}</span> - <span>{meetup.timeTo}</span>
        </div>
        <div className="meetup-side-box-place m-b-sm">
          <p>
            <b>How to find us</b>
          </p>
          <p>{meetup.location}</p>
        </div>
        <div className="meetup-side-box-more-info">
          <p>
            <b>Additional Info</b>
          </p>
          <p>{meetup.shortInfo}</p>
        </div>
      </div>
      <div className="meetup-side-box-map">
        <img
          src="https://cnet2.cbsistatic.com/img/H_zPLL8-QTZOLxJvgHQ1Jkz0EgY=/830x467/2013/07/10/f0bcef02-67c2-11e3-a665-14feb5ca9861/maps_routemap.png"
          className="venueMap-mapImg span--100"
          alt="Location image of meetup venue"
        />
      </div>

      <p className="menu-label">Threads</p>
      <ul>
        {threads &&
          threads.map((thread) => <li key={thread._id}>{thread.title}</li>)}
      </ul>

      <p className="menu-label">Who is Going</p>
      <div className="columns is-multiline is-mobile">
        {meetup &&
          meetup.joinedPeople.map((p) => (
            <PersonItemAvatar person={p} key={p._id} />
          ))}
      </div>
    </aside>
  );
};

export default MeetupDetailAside;
