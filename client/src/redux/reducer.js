import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import booksReducer from '../ducks/books';
import categoriesReducer from '../ducks/categories';
import history from '../history';

export default combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
  router: connectRouter(history)
});
