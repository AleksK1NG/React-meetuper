import React from 'react';
import { formatDate } from '../../../utils/helpers';
import ThreadItem from '../../ThreadItem/ThreadItem';
import MeetupDetailAside from '../MeetupDetailAside/MeetupDetailAside';

const MeetupDetailMainSection = ({ meetup, threads }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <MeetupDetailAside meetup={meetup} threads={threads} />
          </div>
          <div className="column is-7 is-offset-1">
            <div className="content is-medium">
              <h3 className="title is-3">About the Meetup</h3>
              <p>{meetup.description}</p>
              <button className="button is-primary">Join In</button>
            </div>
            <div className="content is-medium">
              <h3 className="title is-3">Threads</h3>
              {threads &&
                threads.map((thread) => (
                  <ThreadItem thread={thread} key={thread._id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetupDetailMainSection;
