export const localStorageHelpers = (key = '', cb) => {
  if (
    JSON.parse(localStorage.getItem(key)) &&
    JSON.parse(localStorage.getItem(key)) !== ''
  ) {
    cb(JSON.parse(localStorage.getItem(key)));
  }
};

export const setLocalStorage = (type = '') =>
  localStorage.setItem('sortBooksBy', JSON.stringify(type));
