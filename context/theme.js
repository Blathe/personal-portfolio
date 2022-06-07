import React, { useState, createContext, useContext } from 'react';

const Context = createContext();

const Theme = ({children}) => {
  const [theme, setTheme] = useState('dark');

  return (
    <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
  )
}

const useThemeContext = () => {
    return useContext(Context);
}

export { Theme, useThemeContext }