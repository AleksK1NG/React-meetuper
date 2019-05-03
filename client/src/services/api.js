import axios from 'axios';
/*
 * Api Service
 * */

const booksListURL = 'http://localhost:3001/booksList';
const categoriesURL = '/api/v1/categories';
const meetupsURL = '/api/v1/meetups';
const registerURL = '/api/v1/users/register';
const loginURL = '/api/v1/users/login';
const threadsURL = '/api/v1/threads';
const currentUserURL = '/api/v1/users/me';
const logoutURL = '/api/v1/users/logout';
const postsURL = '/api/v1/posts';
const userStats = '/api/v1/users/me/activity';

// Axios Instance
const axiosInstance = axios.create({
  timeout: 3000
});

// Runs before every request
axiosInstance.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('react-meetuper') || '';

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

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
    return axios.get(meetupsURL);
  }

  getMeetupById(id) {
    return axios.get(`${meetupsURL}/${id}`);
  }

  createMeetup(meetup) {
    return axiosInstance.post(meetupsURL, meetup);
  }

  joinMeetup(meetupId) {
    return axiosInstance.post(`${meetupsURL}/${meetupId}/join`);
  }

  leaveMeetup(meetupId) {
    return axiosInstance.post(`${meetupsURL}/${meetupId}/leave`);
  }

  getThreadsById(meetupId) {
    return axios.get(`${threadsURL}?meetupId=${meetupId}`);
  }

  createThread(thread) {
    return axiosInstance.post(threadsURL, thread);
  }

  createPost(post) {
    return axiosInstance.post(postsURL, post);
  }

  registerUser(userData) {
    return axios.post(registerURL, userData);
  }

  loginUser(userData) {
    return axios.post(loginURL, userData);
  }

  loadUser() {
    return axiosInstance.get(currentUserURL);
  }

  logoutUser() {
    return axios.post(logoutURL);
  }

  getUserStats() {
    return axiosInstance.get(userStats);
  }
}

export default new ApiService();
