import React from 'react';
import { formatDate } from '../../../utils/helpers';

const MeetupDetailHeroSection = ({
  meetup,
  user,
  isCreator,
  isMeetupCreator
}) => {
  console.log('is creator =>', isCreator);
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

        {/*{user && meetup && user._id === meetup.meetupCreator._id ? (*/}
        {/*  <div className="is-pulled-right">*/}
        {/*    <button className="button is-danger">Leave Group</button>*/}
        {/*  </div>*/}
        {/*) : null}*/}

        {isMeetupCreator ? (
          <div className="is-pulled-right">
            <button className="button is-danger">Leave Group</button>
          </div>
        ) : null}

        {/*<div className="is-pulled-right">*/}
        {/*  <button className="button is-danger">Leave Group</button>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default MeetupDetailHeroSection;
