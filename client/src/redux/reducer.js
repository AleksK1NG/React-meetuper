import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import categoriesReducer from '../ducks/categories';
import meetupsReducer from '../ducks/meetups';
import threadsReducer from '../ducks/threads';
import authReducer from '../ducks/auth';
import history from '../history';

export default combineReducers({
  categories: categoriesReducer,
  meetups: meetupsReducer,
  threads: threadsReducer,
  auth: authReducer,
  router: connectRouter(history)
});
