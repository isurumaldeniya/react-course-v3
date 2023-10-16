import { useContext } from 'react';
import { NavbarContext } from './Navbar';

const UserContainer = () =>
  //since we are using useContext hook we dont need prop drilling
  // { user, logout, login }
  {
    const { user, logout, login } = useContext(NavbarContext);

    return (
      <>
        <div className="user-container">
          {user ? (
            <>
              <p>Hello there, {user?.name?.toUpperCase()}</p>
              <button className="btn" onClick={logout}>
                logout
              </button>
            </>
          ) : (
            <>
              <p>Please Login</p>
              <button className="btn" onClick={login}>
                Login
              </button>
            </>
          )}
        </div>
      </>
    );
  };

export default UserContainer;
