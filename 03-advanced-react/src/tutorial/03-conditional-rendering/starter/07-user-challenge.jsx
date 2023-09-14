import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'Isuru' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}

      {/* {!user && <button onClick={login}>Login</button>}
      {user && (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button onClick={logout}>Logout</button>
        </div>
      )} */}
    </>
  );
};

export default UserChallenge;
