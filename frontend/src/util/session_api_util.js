import axios from 'axios';

// setting axios headers
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // remove token from memory once the user is logged out or when the token has expired
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;