'use client'
import { useGSAP } from '@gsap/react';
import { CSSProperties, FC, ReactNode, createContext, useContext, useRef, useState } from 'react'
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import gsap from "gsap"

gsap.registerPlugin(ScrollSmoother);


interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties
}
type ScrollTo = (target: gsap.DOMTarget | number, smooth?: boolean, position?: string) => void
type SmoothScrollProviderValue = {
    scrollSmoother: ScrollSmoother | null
    scrollTo: ScrollTo
} | null;
const smoothScrollContext = createContext<SmoothScrollProviderValue>(null);

const SmoothScrollRegisterContextProvider: FC<Props> = ({children,className,style}) => {

    const containerRef = useRef<HTMLDivElement>(null)
    const [scrollSmoother, setScrollSmoother] = useState<ScrollSmoother | null>(null);
 
    const { contextSafe } = useGSAP((/*context, contextSafe*/) => {
        const _scrollSmoother = ScrollSmoother.create({
            content: containerRef.current,
            smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: true, 
            smoothTouch: 0.1, 
        });
        setScrollSmoother(_scrollSmoother)
    },{dependencies: [children,containerRef]});
    
    const scrollTo: ScrollTo =  contextSafe((...args) => {
        scrollSmoother?.scrollTo(...args)
        
    })
    const providerValue: SmoothScrollProviderValue = {
        scrollSmoother,
        scrollTo
    }
    return (
        <smoothScrollContext.Provider value={providerValue}>
    
            <div ref={containerRef} className={className} style={style}>
                {children}
            </div>
        </smoothScrollContext.Provider>
    );
};

export default SmoothScrollRegisterContextProvider;

const useSmoothScrollContext = () => {
    if(!smoothScrollContext) {
        console.warn("you might forgot to wrap SmoothScrollRegisterContextProvider")
    }
    return useContext(smoothScrollContext)
};
export { useSmoothScrollContext }
