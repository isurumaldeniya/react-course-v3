import { useEffect } from 'react';
import axios from 'axios';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const authFetch = axios.create({
    baseURL: 'https://course-api.com',
    headers: {
      Accept: 'application/json',
    },
  });

  const fetchData = async () => {
    try {

      const resp1 = await authFetch(randomUserUrl);
      console.log(resp1.data)
    } catch (error) {
      console.log(error.response)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
