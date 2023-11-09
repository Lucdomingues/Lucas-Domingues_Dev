import { createContext } from 'react';

type ThemeContextType = {
  states: string,
};

const ThemeContext = createContext({} as ThemeContextType);

export default ThemeContext;
