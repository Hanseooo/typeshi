import { createContext, useContext } from "react";

export type modal = {
    isLanguageOpen: boolean,
    isTimeOpen: boolean,
    isWordCountOpen: boolean,
}

export const modalContext = createContext<[modal, React.Dispatch<React.SetStateAction<modal>>] | null>(null)

export function useModal(): [modal, React.Dispatch<React.SetStateAction<modal>>] {
    const modal = useContext(modalContext);
    if (!modal) throw new Error("useModal must be used within a ModalProvider");
    return modal;
}