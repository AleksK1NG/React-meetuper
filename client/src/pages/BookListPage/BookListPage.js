import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BookListItem from '../../components/BookListItem/BookListItem';
import Loader from '../../components/shared/Loader/Loader';
import _ from 'lodash';
import {
  allBooksSelector,
  deleteBook,
  fetchAllBooks,
  loadingSelector
} from '../../ducks/books';
import {
  localStorageHelpers,
  setLocalStorage
} from '../../utils/localStorageHelpers';

const BookListPage = ({ loading, books, fetchAllBooks, deleteBook }) => {
  const [booksList, setBooksList] = useState(books || []);

  useEffect(() => {
    fetchAllBooks();
  }, []);

  useEffect(() => {
    setBooksList(books);
    localStorageHelpers('sortBooksBy', sortBooks);
  }, [books]);

  const sortBooks = (type) => {
    const bookList = [...books];
    setLocalStorage(type);
    const sortedBooksList = _.orderBy(bookList, [type], 'asc');
    setBooksList(sortedBooksList);
  };

  if (loading) return <Loader />;

  return (
    <React.Fragment>
      <div>
        <p className="h6">Sort books list by:</p>
        <button
          className="btn btn-secondary"
          onClick={() => sortBooks('title')}
        >
          <i className="fas fa-filter" /> Title
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => sortBooks('length')}
        >
          <i className="fas fa-filter" /> Page count
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => sortBooks('publicationYear')}
        >
          <i className="fas fa-filter" /> Year
        </button>
      </div>

      <TransitionGroup className="shopping-list">
        {booksList ? (
          booksList.map((book) => (
            <CSSTransition key={book.id} timeout={500} classNames="fade">
              <BookListItem
                key={book.id}
                id={book.id}
                title={book.title}
                authors={book.authors}
                image={book.image}
                ISBN={book.ISBN}
                length={book.length}
                publisher={book.publisher}
                publicationYear={book.publicationYear}
                publicationDate={book.publicationDate}
                deleteBook={deleteBook}
              />
            </CSSTransition>
          ))
        ) : (
          <Loader />
        )}
      </TransitionGroup>
    </React.Fragment>
  );
};

export default connect(
  (state) => ({
    books: allBooksSelector(state),
    loading: loadingSelector(state)
  }),
  { deleteBook, fetchAllBooks }
)(BookListPage);
