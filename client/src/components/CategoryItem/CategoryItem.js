import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/helpers';

const CategoryItem = ({ category }) => {
  return (
    <div className="column is-one-quarter" style={{ minHeight: '160px' }}>
      <Link to={`/find/${category.name}`}>
        <span className="is-primary is-top is-medium tooltip">
          <figure className="image is-4by3 imageFade">
            <img
              className="is-rounded"
              src={category.image}
              alt={category.name}
            />
          </figure>
          <div className="subtitle m-t-xs bold">
            {capitalize(category.name)}
          </div>
        </span>
      </Link>
    </div>
  );
};

export default React.memo(CategoryItem);
