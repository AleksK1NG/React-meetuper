import React from 'react';
import { connect } from 'react-redux';
import ThreadItem from '../../ThreadItem/ThreadItem';
import MeetupDetailAside from '../MeetupDetailAside/MeetupDetailAside';
import ThreadCreateModal from '../../ThreadCreateModal/ThreadCreateModal';
import { canCratePostSelector, threadsSortedSelector } from '../../../ducks/threadsModule/threadsSelectors';
import { createThread } from '../../../ducks/threadsModule/threadsActions';

const MeetupDetailMainSection = ({
  isAllDataLoaded,
  getMoreThreadPages,
  isCanCreatePost,
  sortedThreads,
  createThread,
  isMeetupMember,
  isMeetupCreator,
  joinMeetup,
  meetup,
  threads,
  user,
  isCanJoinMeetup,
  isAuthenticated
}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <MeetupDetailAside meetup={meetup} threads={threads} user={user} />
          </div>
          <div className="column is-7 is-offset-1">
            <div className="content is-medium">
              <h3 className="title is-3">About the Meetup</h3>
              <p>{meetup.description}</p>
              {isCanJoinMeetup ? (
                <button onClick={() => joinMeetup(meetup._id)} className="button is-primary">
                  Join In
                </button>
              ) : null}

              {!isAuthenticated ? (
                <button className="button is-warning" disabled>
                  You need authenticate in order to join
                </button>
              ) : null}

              {(isMeetupMember || isMeetupCreator) && (
                <ThreadCreateModal
                  meetupId={meetup._id}
                  createThread={createThread}
                  title="Create Thread"
                  btnTitle={`Welcome ${user.username}, Start a new thread`}
                />
              )}
            </div>
            <div className="content is-medium">
              <h3 className="title is-3">Threads</h3>
              {/*{threads &&*/}
              {/*  threads.map((thread) => (*/}
              {/*    <ThreadItem thread={thread} key={thread._id} />*/}
              {/*  ))}*/}
              {sortedThreads &&
                sortedThreads.map((thread) => (
                  <ThreadItem thread={thread} key={thread._id} isCanCreatePost={isCanCreatePost} />
                ))}
            </div>
            {!isAllDataLoaded && (
              <button className="button is-primary" onClick={getMoreThreadPages}>
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(
  (state) => ({
    sortedThreads: threadsSortedSelector(state),
    isCanCreatePost: canCratePostSelector(state)
  }),
  { createThread }
)(MeetupDetailMainSection);
