import { useGlobalContext } from './Context';
import Hero from './Hero';
import NavBar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';

const App = () => {
  // const { isSidebarOpen } = useGlobalContext();
  return (
    <>
      <NavBar />
      <Hero />
      <Sidebar />
      <Submenu />
    </>
  );
};
export default App;
