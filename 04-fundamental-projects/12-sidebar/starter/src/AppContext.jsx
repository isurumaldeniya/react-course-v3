import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, isModelOpen, setIsModelOpen }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
