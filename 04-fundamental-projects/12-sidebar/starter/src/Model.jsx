import { useGlobalContext } from './AppContext';

const Model = () => {
  const { isModelOpen } = useGlobalContext();

  return <div>{isModelOpen && <h2 style={{ color: 'green' }}>Model</h2>}</div>;
};

export default Model;
