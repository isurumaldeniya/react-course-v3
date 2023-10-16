import { useState, createContext } from 'react';
import NavLinks from './NavLinks';

//instead of prop drilling we can pass the props using context api
export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });
  const logout = () => {
    setUser(null);
  };
  const login = () => {
    setUser({ name: 'bob' });
  };
  return (
    <NavbarContext.Provider value={{user, login, logout}}>
      <nav className="navbar">
        <h5>Context API</h5>
        {/* <NavLinks user={user} logout={logout} login={login} /> */}
        <NavLinks/>
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
