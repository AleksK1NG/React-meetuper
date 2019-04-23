import { appName } from '../config';
import { List, fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import ApiService from '../services/api';
import { replace } from 'connected-react-router';

export const moduleName = 'categories';
const prefix = `${appName}/${moduleName}`;

/*
 * Constants
 * */
export const FETCH_ALL_REQUEST = `${prefix}/FETCH_ALL_REQUEST`;

export const FETCH_BOOK_BY_ID = `${prefix}/FETCH_BOOK_BY_ID`;
export const FETCH_BOOK_BY_ID_REQUEST = `${prefix}/FETCH_BOOK_BY_ID_REQUEST`;
export const FETCH_BOOK_BY_ID_SUCCESS = `${prefix}/FETCH_BOOK_BY_ID_SUCCESS`;
export const FETCH_BOOK_BY_ID_ERROR = `${prefix}/FETCH_BOOK_BY_ID_ERROR`;

export const ADD_BOOK_REQUEST = `${prefix}/ADD_BOOK_REQUEST`;
export const ADD_BOOK_SUCCESS = `${prefix}/ADD_BOOK_SUCCESS`;
export const ADD_BOOK_ERROR = `${prefix}/ADD_BOOK_ERROR`;

export const DELETE_BOOK_REQUEST = `${prefix}/DELETE_BOOK_REQUEST`;
export const DELETE_BOOK_SUCCESS = `${prefix}/DELETE_BOOK_SUCCESS`;
export const DELETE_BOOK_ERROR = `${prefix}/DELETE_BOOK_ERROR`;

export const UPDATE_BOOK_REQUEST = `${prefix}/UPDATE_BOOK_REQUEST`;
export const UPDATE_BOOK_SUCCESS = `${prefix}/UPDATE_BOOK_SUCCESS`;
export const UPDATE_BOOK_ERROR = `${prefix}/UPDATE_BOOK_ERROR`;

export const FETCH_CATEGORIES_REQUEST = `${prefix}/FETCH_CATEGORIES_REQUEST`;
export const FETCH_CATEGORIES_SUCCESS = `${prefix}/FETCH_CATEGORIES_SUCCESS`;
export const FETCH_CATEGORIES_ERROR = `${prefix}/FETCH_CATEGORIES_ERROR`;

/**
 * Reducer
 * */
export const ReducerRecord = fromJS({
  user: 'Alex',
  error: null,
  loadingCategories: false,
  categories: new List([]),
  category: {}
});

export default function reducer(state = ReducerRecord, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CATEGORIES_REQUEST:
    case UPDATE_BOOK_REQUEST:
    case ADD_BOOK_REQUEST:
    case FETCH_BOOK_BY_ID_REQUEST:
    case FETCH_BOOK_BY_ID:
      return state.set('loadingCategories', true);

    case FETCH_CATEGORIES_SUCCESS:
      return state
        .set('categories', fromJS(payload.data))
        .set('loadingCategories', false)
        .set('error', null);

    case FETCH_BOOK_BY_ID_SUCCESS:
      return state
        .set('loadingCategories', false)
        .set('error', null)
        .set('book', fromJS(payload.data));

    case FETCH_CATEGORIES_ERROR:
    case ADD_BOOK_ERROR:
    case DELETE_BOOK_ERROR:
    case UPDATE_BOOK_ERROR:
      return state.set('error', payload.err).set('loadingCategories', false);

    case ADD_BOOK_SUCCESS:
      return state
        .set('error', null)
        .set('loadingCategories', false)
        .update('books', (books) => books.push(fromJS(payload.data)));

    case DELETE_BOOK_SUCCESS:
      return state
        .set('loadingCategories', false)
        .set('error', null)
        .update('books', (books) => {
          return books.filter((book) => book.get('id') !== payload);
        });

    case UPDATE_BOOK_SUCCESS:
      return state
        .set('error', null)
        .set('loadingCategories', false)
        .update('books', (books) =>
          books.map((book) =>
            book.get('id') === payload.data.id ? fromJS(payload.data) : book
          )
        );

    default:
      return state;
  }
}

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName];

export const loadingCatSelector = createSelector(
  stateSelector,
  (state) => state.get('loadingCategories')
);
export const allBooksSelector = createSelector(
  stateSelector,
  (state) => state.get('books').toJS()
);
export const bookSelector = createSelector(
  stateSelector,
  (state) => state.get('book').toJS()
);

export const allCategoriesSelector = createSelector(
  stateSelector,
  (state) => state.get('categories').toJS()
);

/**
 * Action Creators
 * */

export const fetchAllCategories = () => {
  return {
    type: FETCH_ALL_REQUEST
  };
};

export const fetchBookById = (bookId) => {
  return {
    type: FETCH_BOOK_BY_ID,
    payload: { bookId }
  };
};

export const addBook = (book) => {
  return {
    type: ADD_BOOK_REQUEST,
    payload: { book }
  };
};

export const deleteBook = (bookId) => {
  return {
    type: DELETE_BOOK_REQUEST,
    payload: { bookId }
  };
};

export const updateBook = (bookId, newBook) => {
  return {
    type: UPDATE_BOOK_REQUEST,
    payload: { bookId, newBook }
  };
};

/**
 * Sagas
 */
export function* fetchAllCategoriesSaga() {
  try {
    yield put({
      type: FETCH_CATEGORIES_REQUEST
    });

    const { data } = yield call(ApiService.getAllCategories);

    yield put({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: { data }
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: FETCH_CATEGORIES_ERROR,
      payload: { err }
    });
  }
}

export function* fetchBookByIdSaga(action) {
  const { payload } = action;

  try {
    yield put({
      type: FETCH_BOOK_BY_ID_REQUEST
    });

    const { data } = yield call(ApiService.getBookById, payload.bookId);

    yield put({
      type: FETCH_BOOK_BY_ID_SUCCESS,
      payload: { data }
    });
  } catch (err) {
    console.log(err);

    yield put({
      type: FETCH_BOOK_BY_ID_ERROR,
      payload: { err }
    });
  }
}

export function* addBookSaga(action) {
  const { payload } = action;

  try {
    const { data } = yield call(ApiService.addBook, payload.book);

    yield put({
      type: ADD_BOOK_SUCCESS,
      payload: { data }
    });

    yield put(replace('/'));
  } catch (err) {
    console.log(err);
    yield put({
      type: ADD_BOOK_ERROR,
      payload: { err }
    });
  }
}

export function* deleteBookSaga(action) {
  const {
    payload: { bookId }
  } = action;

  try {
    yield call(ApiService.deleteBook, bookId);

    yield put({
      type: DELETE_BOOK_SUCCESS,
      payload: bookId
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: DELETE_BOOK_ERROR,
      payload: { err }
    });
  }
}

export function* updateBookSaga(action) {
  const {
    payload: { bookId, newBook }
  } = action;

  try {
    const { data } = yield call(ApiService.updateBook, bookId, newBook);

    yield put({
      type: UPDATE_BOOK_SUCCESS,
      payload: { data }
    });

    yield put(replace('/'));
  } catch (err) {
    console.log(err);
    yield put({
      type: UPDATE_BOOK_ERROR,
      payload: { err }
    });
  }
}

export function* saga() {
  yield all([
    takeEvery(FETCH_ALL_REQUEST, fetchAllCategoriesSaga),
    takeEvery(FETCH_BOOK_BY_ID, fetchBookByIdSaga),
    takeEvery(ADD_BOOK_REQUEST, addBookSaga),
    takeEvery(DELETE_BOOK_REQUEST, deleteBookSaga),
    takeEvery(UPDATE_BOOK_REQUEST, updateBookSaga)
  ]);
}
