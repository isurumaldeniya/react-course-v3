import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  //inside useStatus we can define the default value of the users
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const msg = `Request failed with status ${response.status}. ${response.statusText}`;
        throw new Error(msg);
      }
      const data = await response.json();
      setUsers(data);
      // console.log(users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, html_url, avatar_url, login } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
