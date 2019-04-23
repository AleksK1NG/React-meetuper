import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import booksReducer from '../ducks/books';
import categoriesReducer from '../ducks/categories';
import meetupsReducer from '../ducks/meetups';
import history from '../history';

export default combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
  meetups: meetupsReducer,
  router: connectRouter(history)
});
