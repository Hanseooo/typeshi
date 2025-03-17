import { useState } from "react";
import { modal, modalContext } from "./modalContext";

export default function ModalProvider({ children }: { children: React.ReactNode }) {
    const [modalState, setModalState] = useState<modal>(
        {
            isLanguageOpen: false,
            isTimeOpen: false,
            isWordCountOpen: false
        }
    )
    return (
        <modalContext.Provider value={[modalState, setModalState]}>
            {children}
        </modalContext.Provider>
    )
}