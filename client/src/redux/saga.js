import { all } from 'redux-saga/effects';
import { saga as categoriesSaga } from '../ducks/categories';
import { saga as meetupsSaga } from '../ducks/meetups';
import { saga as threadsSaga } from '../ducks/threads';
import { saga as authSaga } from '../ducks/auth';

export default function* rootSaga() {
  yield all([categoriesSaga(), meetupsSaga(), threadsSaga(), authSaga()]);
}
