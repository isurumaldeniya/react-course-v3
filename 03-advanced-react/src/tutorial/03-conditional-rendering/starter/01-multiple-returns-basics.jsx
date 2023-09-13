import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'Isuru Maldeniya' });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <>
      <h2>Multiple Returns Basics</h2>
      {user ? (
        <div>
          <h3>Hello there {user.name}</h3>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </>
  );
};
export default MultipleReturnsBasics;
