import axios from 'axios';
/*
 * Api Service
 * */

const booksListURL = 'http://localhost:3001/booksList';
// const categoriesURL = 'http://localhost:3001/api/v1/categories';
const categoriesURL = '/api/v1/categories';

class ApiService {
  getAllBooks() {
    return axios.get(booksListURL);
  }

  getBookById(id) {
    return axios.get(`${booksListURL}/${id}`);
  }

  addBook(book) {
    return axios.post(booksListURL, book);
  }

  deleteBook(bookId) {
    return axios.delete(`${booksListURL}/${bookId}`);
  }

  updateBook(bookId, newBook) {
    return axios.put(`${booksListURL}/${bookId}`, newBook);
  }

  getAllCategories() {
    return axios.get(categoriesURL);
  }
}

export default new ApiService();
