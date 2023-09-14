import { useState } from 'react';

import data from './data';
const App = () => {
  const [users, setUsers] = useState(null);

  console.log(users);
  return (
    <>
      {users ? (
        <section className="container">
          <h1>{users.length} Birthdays Today</h1>
          {users.map((user) => {
            const { id, name, age, image } = user;

            return (
              <article key={id} className="person">
                <img
                  //
                  className="img"
                  src={image}
                  alt={name}
                />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
              </article>
            );
          })}

          <button className="btn" onClick={() => setUsers(null)}>
            Clear All
          </button>
        </section>
      ) : (
        <div>
          <h1>See Recent Birthdays</h1>
          <button className="btn" onClick={() => setUsers(data)}>
            See Birthdays
          </button>
        </div>
      )}
    </>
  );
};
export default App;
