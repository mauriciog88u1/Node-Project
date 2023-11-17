import React, { createContext, useState, useContext, useEffect } from 'react';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={toggleTheme}
        >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    );
}



const ThemeContext = createContext("light");

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    // Toggle between 'light' and 'dark'
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Effect to apply the theme class to the body
    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
