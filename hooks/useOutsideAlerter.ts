import { DependencyList, RefObject, useEffect } from "react";


export function useOutsideAlerter(ref: RefObject<HTMLElement | null>, callback: () => void = () => {}, deps: DependencyList = []) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if(ref.current && event.target && !ref.current.contains(event.target as Node)){
                callback()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref,...deps]);
}


