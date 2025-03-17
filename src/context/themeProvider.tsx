import { useState } from "react";
import { ThemeContext } from "./themeContext";


export default function ThemeProvider({children} : {children : React.ReactNode}) {
    const [theme, setTheme] = useState("dark");
    return(
        <ThemeContext.Provider value={[theme,setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}