import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./themeContext";

interface ThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): ThemeResult{
    const {theme, setTheme}= useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    }
}