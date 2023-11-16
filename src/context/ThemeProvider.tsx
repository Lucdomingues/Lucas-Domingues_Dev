import React, {useMemo, useState} from 'react';
import ThemeContext from './ThemeContext';

type ThemeProviderType = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderType) {
  const [menuSelect, setMenuSelect] = useState<boolean>(true);
  const [hiddenUpDown, setHiddenUpDown] = useState<boolean>(false);

  const data = useMemo(
    () => ({ menuSelect,
       setMenuSelect,
       hiddenUpDown, setHiddenUpDown
  }),
   [
    menuSelect,
     setMenuSelect,
     hiddenUpDown, setHiddenUpDown
    ]);
  return (
    <ThemeContext.Provider value={ data }>
      { children }
    </ThemeContext.Provider>
  );
}
