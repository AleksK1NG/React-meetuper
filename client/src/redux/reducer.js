import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import categoriesReducer from '../ducks/categoriesModule/categoriesReducer';
import meetupsReducer from '../ducks/meetupsModule/meetupsReducer';
import threadsReducer from '../ducks/threadsModule/threadsReducer';
import authReducer from '../ducks/authModule/authReducer';
import userReducer from '../ducks/userModule/userReducer';
import metaReducer from '../ducks/metaModule/metaReducer';
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
