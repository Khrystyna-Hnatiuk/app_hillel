import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const Theme = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });
    const toggleTheme = () => {
        setTheme((prevTheme) => {
          const newTheme = prevTheme === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme); 
          return newTheme;
        });
      };
 

    const value = {
        theme,
        toggleTheme
    }

    return (
        <Theme.Provider value={value}>
            <div className={theme}>
                {children}
            </div>
        </Theme.Provider>
    )
}


export const useTheme = () => useContext(Theme)