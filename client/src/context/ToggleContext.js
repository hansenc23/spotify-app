import React, { useState, createContext } from 'react';

export const ToggleContext = createContext();

export const ToggleProvider = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleProfile = () => {
    setToggle(!toggle);
  };

  return <ToggleContext.Provider value={{ toggle, toggleProfile }}>{props.children}</ToggleContext.Provider>;
};
