import { all } from 'redux-saga/effects';
import { saga as booksSaga } from '../ducks/books';

export default function* rootSaga() {
  yield all([booksSaga()]);
}
