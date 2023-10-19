import { useGlobalContext } from './AppContext';

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <div>{isSidebarOpen && <h2 style={{ color: 'blue' }}>Sidebar</h2>}</div>
  );
};

export default Sidebar;
