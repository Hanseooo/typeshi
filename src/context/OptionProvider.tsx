import { useState } from "react";
import { Option, optionContext } from "./optionContext";

export default function OptionProvider({children} : {children : React.ReactNode}) {
    const [options, setOptions] = useState<Option>({
        punctuation: false,
        capitalization: false,
        numbers: false,
        time: 30,
        words: 100,
        language: "en"
    })
    
        return(
        <optionContext.Provider value={[options,setOptions]}>
            {children}
        </optionContext.Provider>

    )

}