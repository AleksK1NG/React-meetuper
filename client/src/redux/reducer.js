import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import categoriesReducer from '../ducks/categories';
import meetupsReducer from '../ducks/meetups';
import threadsReducer from '../ducks/threads';
import authReducer from '../ducks/auth';
import userReducer from '../ducks/user';
import metaReducer from '../ducks/meta';
import history from '../history';

export default combineReducers({
  categories: categoriesReducer,
  meetups: meetupsReducer,
  threads: threadsReducer,
  auth: authReducer,
  user: userReducer,
  meta: metaReducer,
  router: connectRouter(history)
});
