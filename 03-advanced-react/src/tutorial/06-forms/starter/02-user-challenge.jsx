import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const addUser = (event) => {
    event.preventDefault();

    if (!name) {
      console.log('no name submitted');
      return;
    } else {
      const newUser = { id: users.length + 1, name };
      //ES6 short hand syntax ==> same as using name: name
      setUsers([...users, newUser]);
    }
  };

  function removeUser(id) {
    setUsers(users.filter((user) => user.id != id));
  }

  return (
    <div>
      <form className="form" onSubmit={addUser}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users</h2>
      <div>
        {users.length == 0 ? (
          <p>No users available</p>
        ) : (
          users.map((user) => {
            return (
              <div className="user" key={user.id}>
                {user.name}
                <button className="btn" onClick={() => removeUser(user.id)}>
                  {' '}
                  remove user
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default UserChallenge;
