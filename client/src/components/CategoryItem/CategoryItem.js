import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/helpers';

const CategoryItem = ({ category }) => {
  console.log('reander category item');
  return (
    <div className="column is-one-quarter" style={{ minHeight: '160px' }}>
      <Link to={`/find/${category.name}`}>
        <span className="is-primary is-top is-medium tooltip">
          <figure className="image is-4by3 imageFade">
            <img className="is-rounded" src={category.image} />
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
