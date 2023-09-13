import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Request failed due to ${response.statusText} with status ${response.status}`
        );
      }
      const data = await response.json();
      setTimeout(() => {
        setUser(data);
      }, 5000);
      // console.log(data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading .....</h2>;
  }
  if (isError) {
    return <h2>Error occurred</h2>;
  }
  if (user) {
    const { html_url, avatar_url, login } = user;
    return (
      <ul className="user">
        <li>
          <img
            style={{ width: '150px', borderRadius: '25px' }}
            src={avatar_url}
            alt={html_url}
          />
          <h2>{login}</h2>
          <a href={html_url}>{login}</a>
        </li>
      </ul>
    );
  }
};
export default MultipleReturnsFetchData;
