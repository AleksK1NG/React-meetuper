import axios from 'axios';
/*
 * Api Service
 * */

const booksListURL = 'http://localhost:3001/booksList';
const categoriesURL = '/api/v1/categories';
const meetupsURl = '/api/v1/meetups';
const registerURL = '/api/v1/users/register';
const loginURL = '/api/v1/users/login';
const threadsURL = '/api/v1/threads';
const currentUserURL = '/api/v1/users/me';
const logoutURL = '/api/v1/users/logout';

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

  getAllMeetups() {
    return axios.get(meetupsURl);
  }

  getMeetupById(id) {
    return axios.get(`${meetupsURl}/${id}`);
  }

  getThreadsById(meetupId) {
    return axios.get(`${threadsURL}?meetupId=${meetupId}`);
  }

  registerUser(userData) {
    return axios.post(registerURL, userData);
  }

  loginUser(userData) {
    return axios.post(loginURL, userData);
  }

  loadUser() {
    const token = localStorage.getItem('react-meetuper');
    const config = {
      headers: {
        authorization: `Bearer ${token}`
      }
    };
    return axios.get(currentUserURL, config);
  }

  logoutUser() {
    return axios.post(logoutURL);
  }
}

export default new ApiService();
