"use client"
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from 'react'
import PopUp from './widget/PopUp';

interface Props{
    children?: ReactNode
}
type PopupContextProviderValue = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
} | null;


const popupContext = createContext<PopupContextProviderValue>(null);

const PopupContextProvider: FC<Props> = ({children}) => {

    const [isOpen,setIsOpen] = useState<boolean>(false);

    const providerValue: PopupContextProviderValue = {
        isOpen,
        setIsOpen
    }

    return (
        <>
            <PopUp setIsOpen={setIsOpen} />
            <popupContext.Provider value={providerValue}>
                {children}
            </popupContext.Provider>
        </>

    );
};

export default PopupContextProvider;

export const usePopContext = () => {
    if(!popupContext) {
        console.warn("you might forgot to wrap popupContextProvider")
    }
    return useContext(popupContext)
};