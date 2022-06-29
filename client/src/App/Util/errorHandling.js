import axios from 'axios';
import { toast } from 'react-toastify';



axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { data, status } = error.response;

    switch(status){
        
    }

    return Promise.reject(error);
  });