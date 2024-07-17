import React, { createContext, ReactNode, useContext } from 'react';
import { useIsFirstTime } from '~/hooks/isFirstTime';

type AppContextType = {
  isFirstTime: boolean | null;
  setIsFirstTime: () => Promise<void>;
};

const AppContext = createContext<AppContextType | null>(null);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isFirstTime, setIsFirstTime } = useIsFirstTime();
  const values = {
    isFirstTime,
    setIsFirstTime,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};
export { useAppContext, AppProvider };
