import { createContext, useContext } from "react";

export type Option = {
    punctuation: boolean,
    capitalization: boolean,
    numbers: boolean,
    time: number,
    words: number,
    language: string
}

export const optionContext = createContext<[Option, React.Dispatch<React.SetStateAction<Option>>] | null>(null)

export function useOption() {
    const context = useContext(optionContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context
}
