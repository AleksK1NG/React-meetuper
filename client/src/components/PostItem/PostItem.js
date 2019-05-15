import React from 'react';
import { formatDate } from '../../utils/helpers';

const PostItem = ({ post }) => {
  return (
    <article className="media post-item" key={post._id}>
      <figure className="media-left is-rounded user-image">
        <p className="image is-32x32">
          <img className="is-rounded" src={post.user.avatar} alt={post.user.name} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content is-medium">
          <div className="post-content">
            <strong className="author">{post.user.name}</strong>{' '}
            <small className="post-time">{formatDate(post.updatedAt, 'LLL')}</small>
            <br />
            <p className="post-content-message"> {post.text}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default React.memo(PostItem);
