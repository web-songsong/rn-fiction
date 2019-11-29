import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3200/';

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    const {data} = response;
    return data.response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axios;
