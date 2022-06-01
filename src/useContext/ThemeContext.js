import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

function ThemeProvider({ children }) {

    const [theme, setTheme] = useState('dark');
    const handleToggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const defaultValue = {
        theme,
        handleToggleTheme
    }

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export {
    ThemeContext,
    ThemeProvider
}