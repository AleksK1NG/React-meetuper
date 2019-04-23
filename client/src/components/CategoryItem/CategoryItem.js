import React from 'react';
import { capitalize } from '../../utils/helpers';

const CategoryItem = ({ category }) => {
  return (
    <div className="column is-one-quarter" style={{ minHeight: '160px' }}>
      <a href="#">
        <span className="is-primary is-top is-medium tooltip">
          <figure className="image is-4by3 imageFade">
            <img className="is-rounded" src={category.image} />
          </figure>
          <div className="subtitle m-t-xs bold">
            {capitalize(category.name)}
          </div>
        </span>
      </a>
    </div>
  );
};

export default CategoryItem;
