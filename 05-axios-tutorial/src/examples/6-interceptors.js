import axios from 'axios';
import { useEffect } from 'react';

//create a custom instance using axios.create
const authFetch = axios.create({
  baseURL: 'https://course-api.com'
});


//intercept request before going to the server
authFetch.interceptors.request.use(
  (request) => {
    // request.headers.common['Accept'] = `application/json`;
    request.headers['Accept'] = `application/json`;

    console.log('request sent');
    // must return request
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//intercept the response before coming to the client. 
authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }
);

const Interceptors = () => {
  const fetchData = async () => {
    const resposne1 = await authFetch('/react-store-products');
    console.log(resposne1.data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
