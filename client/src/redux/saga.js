import { all } from 'redux-saga/effects';
import { saga as categoriesSaga } from '../ducks/categoriesModule/categoriesSaga';
import { saga as meetupsSaga } from '../ducks/meetupsModule/meetupsSaga';
import { saga as threadsSaga } from '../ducks/threadsModule/threadsSaga';
import { saga as authSaga } from '../ducks/authModule/authSaga';
import { saga as userSaga } from '../ducks/userModule/userSaga';
import { saga as metaSaga } from '../ducks/metaModule/metaSaga';

export default function* rootSaga() {
  yield all([categoriesSaga(), meetupsSaga(), threadsSaga(), authSaga(), userSaga(), metaSaga()]);
}
