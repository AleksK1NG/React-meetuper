import React from 'react';
import EditBook from '../../components/EditBook/EditBook';

const BookPageEdit = (props) => {
  return (
    <React.Fragment>
      <EditBook id={props.match.params.id} />
    </React.Fragment>
  );
};

export default BookPageEdit;
