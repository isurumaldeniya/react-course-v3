import { useGlobalContext } from './AppContext';

const Home = () => {
  const { isSidebarOpen, setIsSidebarOpen, isModelOpen, setIsModelOpen } = useGlobalContext();
  console.log(isSidebarOpen, isModelOpen)

  return (
    <div>
      <button style={{ textTransform: 'capitalize' }} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>toggle side bar</button>
      <button style={{ textTransform: 'capitalize' }} onClick={() => setIsModelOpen(!isModelOpen)}>toggle model</button>
    </div>
  );
};

export default Home;
