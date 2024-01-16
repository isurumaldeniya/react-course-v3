import { useEffect } from 'react';
import axios from 'axios';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

axios.defaults.headers['Accept'] = 'application/json';
axios.defaults.baseURL = 'https://api.example.com';
// axios.default.headers['Authorization'] = AUTH_TOKEN


const GlobalInstance = () => {
  const fetchData = async () => {

    //now both request will have default headers and options
    const response1 = await axios.get(productsUrl);
    const response2 = await axios.get(randomUserUrl);
    console.log(response1, response2);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
