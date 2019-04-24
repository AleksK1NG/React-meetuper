import React from 'react';

const PersonItemAvatar = ({ person }) => {
  return (
    <div className="column is-3" key={person._id}>
      <figure className="image is-64x64">
        <img className="is-rounded" src={person.avatar} alt="Image" />
      </figure>
    </div>
  );
};

export default PersonItemAvatar;
