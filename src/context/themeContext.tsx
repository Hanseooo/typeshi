import { createContext, useContext } from "react";

export const ThemeContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>] | null>(null);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context
    }


    



