import axios from 'axios';

// setting axios headers
export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // remove token from memory once the user is logged out or when the token has expired
    delete axios.defaults.headers.common['Authorization'];
  }
};

// add two methods which each take user data return a Promise

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};