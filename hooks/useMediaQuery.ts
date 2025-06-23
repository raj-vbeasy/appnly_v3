"use client"
import { useEffect, useState } from "react";




function useMediaQuery(mediaQuery: string): boolean{
 
        const [isMatch, setIsMatch] = useState(false);
    
        
        useEffect(() => {
            if(typeof window !== "undefined"){
       

                const _mediaQueryList = window.matchMedia(mediaQuery);
                setIsMatch( _mediaQueryList.matches);
                
                _mediaQueryList.onchange = (e) => {
                    setIsMatch(e.matches);
                }
                return () => {
                    _mediaQueryList.onchange = null
                }
            }
        
        
        },[mediaQuery]);

        return isMatch
    
}



export default useMediaQuery