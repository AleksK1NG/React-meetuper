import React from 'react';
import PostItem from '../PostItem/PostItem';

const ThreadItem = ({ thread }) => {
  return (
    <div className="box" key={thread._id}>
      <h4 id="const" className="title is-3">
        {thread.title}
      </h4>
      <form className="post-create">
        <div className="field">
          <textarea
            className="textarea textarea-post"
            placeholder="Write a post"
            rows="1"
          />
          <button disabled className="button is-primary m-t-sm">
            Send
          </button>
        </div>
      </form>

      {/**************************** Threads Posts ****************************/}
      {thread &&
        thread.posts.map((post) => <PostItem post={post} key={post._id} />)}
    </div>
  );
};

export default React.memo(ThreadItem);
