import React, { useState, createContext } from 'react';

export const ThemeContext = createContext({
  inDarkMode: false,
  setToDarkMode: () => {},
});

const App = ({ children }) => {
  const [inDarkMode, setToDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ inDarkMode, setToDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default App;
