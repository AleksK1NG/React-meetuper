import React from 'react';
import { formatDate } from '../../../utils/helpers';

const MeetupDetailHeroSection = ({ meetup, isMeetupMember }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="subtitle">{formatDate(meetup.startDate)}</h2>
          <h1 className="title">{meetup.title}</h1>
          <article className="media v-center">
            <figure className="media-left">
              <p className="image is-64x64">
                <img
                  className="is-rounded"
                  src={meetup.meetupCreator.avatar}
                  alt="image"
                />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  Created by <strong> {meetup.meetupCreator.name} </strong>
                </p>
              </div>
            </div>
          </article>
        </div>

        {isMeetupMember ? (
          <div className="is-pulled-right">
            <button className="button is-danger">Leave Meetup</button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default MeetupDetailHeroSection;
