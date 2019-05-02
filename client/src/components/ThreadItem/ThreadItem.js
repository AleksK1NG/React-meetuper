import React from 'react';
import PostItem from '../PostItem/PostItem';
import PostCreate from '../PostCreate/PostCreate';

const ThreadItem = ({ thread, isCanCreatePost }) => {
  return (
    <div className="box" key={thread._id}>
      <h4 id="const" className="title is-3">
        {thread.title}
      </h4>
      {isCanCreatePost && <PostCreate />}

      {/**************************** Threads Posts ****************************/}
      {thread &&
        thread.posts.map((post) => <PostItem post={post} key={post._id} />)}
    </div>
  );
};

export default React.memo(ThreadItem);
