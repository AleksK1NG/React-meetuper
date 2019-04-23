import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import booksReducer from '../ducks/books';
import history from '../history';

export default combineReducers({
  books: booksReducer,
  router: connectRouter(history)
});
