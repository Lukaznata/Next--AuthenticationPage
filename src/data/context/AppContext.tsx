import { createContext, useEffect, useState } from "react";

// type Theme = "dark" | "";

interface AppContextProps {
  theme?: string;
  switchTheme?: () => void;
}

interface AppProviderProps {
  children: any;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: AppProviderProps) {
  const [theme, setTheme] = useState<string | undefined>("dark");

  const switchTheme = () => {
    const newTheme = theme === "" ? "dark" : "";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")?.toString();
    setTheme(savedTheme);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme: theme,
        switchTheme: switchTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
