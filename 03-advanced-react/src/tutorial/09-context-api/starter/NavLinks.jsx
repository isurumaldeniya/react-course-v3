import UserContainer from './UserContainer';

const NavLinks = (
  //since we are passing the props with contextAPI we dont need props now
  // { user, logout, login }
  ) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
      {/* <UserContainer user={user} logout={logout} login={login} /> */}
      <UserContainer />
    </div>
  );
};

export default NavLinks;
