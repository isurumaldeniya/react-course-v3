import { useEffect, useState } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-productssss';

const FirstRequest = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(response)
    } catch (error) {
      const errorMessage = error.response.data;
      const statusCode = error.response.status;

      console.log(error.response);
      console.log('Error: ' + errorMessage.msg + ', ' , 'StatusCode: ' + statusCode)
    }
  }

  useEffect(() => {
    fetchData();
    console.log('first axios request');
  }, []);

  return (<>

    <h2 className='text-center'>first request</h2>
    {
      data.map((item) => {
        return (
          <>
            <img src={item.image} style={{ width: 100, height: 120 }} alt={item.name}></img>
            <h3>{item.name}</h3>
          </>
        )
      })
    }
  </>
  );
};
export default FirstRequest;
