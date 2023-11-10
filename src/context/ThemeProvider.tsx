import React from 'react';
import ThemeContext from './ThemeContext';

type ThemeProviderType = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderType) {
  return (
    <ThemeContext.Provider value={ { states: 'exemplo' } }>
      { children }
    </ThemeContext.Provider>
  );
}
