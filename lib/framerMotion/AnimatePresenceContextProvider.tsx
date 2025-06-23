'use client';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { createContext, FC, ReactNode, useContext, useEffect, useRef, useState } from 'react'
import { AnimatePresence } from "framer-motion"
import { usePathname } from 'next/navigation';
import { useSmoothScrollContext } from '../gsap/SmoothScrollRegisterContextProvider';
import NoneTransition from './pageTransitions/NoneTransition';
import { PageTransitionProps } from './pageTransitions/types/PageTransitionProps';
import FullScreenSlideTransition from './pageTransitions/FullScreenSlideTransition';

export type PageTransitionType = "none" | "FullScreenSlide"
interface Props{
    children: ReactNode,
    pageTransitionType?: PageTransitionType,
    mode?: Mode
}
type Mode =  "sync" | "popLayout" | "wait" | undefined;

function FrozenRouter(props: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext ?? {});
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );

}

export type PageTransitionEventTypes = "animationEnd" | "exitComplete" | "animationStart";
export type RegisterAnimationEventParams = {eventType: PageTransitionEventTypes, callback: () => void}
export type RegisterAnimationEvent = (params: RegisterAnimationEventParams) => (() => void);

type PageTransitionProviderValue = {
    registerAnimationEvent: RegisterAnimationEvent 
} | null;

const pageTransitionContext = createContext<PageTransitionProviderValue>(null);

type EventsStateType = Record<PageTransitionEventTypes,(Event | undefined)>;
const eventNames: PageTransitionEventTypes[] = ["exitComplete","animationStart","animationEnd"];

const AnimatePresenceContextProvider: FC<Props> = ({children, pageTransitionType = "FullScreenSlide", mode}) => {
    const key = usePathname();
    const SmoothScrollContext = useSmoothScrollContext();
    
    const [events, setEvents] = useState<EventsStateType>({
        animationEnd: undefined,
        animationStart: undefined,
        exitComplete: undefined
    });
    
    const disableScrolling = () => {
        if(SmoothScrollContext){
            SmoothScrollContext.scrollTo(0, false);
        }
        document.body.style.overflowY = "clip";
        document.body.style.overflowX = "clip";
    }
    const enableScrolling = () => {
        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "clip";
    }
    const onExitComplete = () => {
        enableScrolling();
        if(events.exitComplete){
            document.dispatchEvent(events.exitComplete);
        }
    }
    const onAnimationStart = () => {
        disableScrolling();
        if(events.animationStart){
            document.dispatchEvent(events.animationStart);
        }
    }
    const onAnimationEnd = () => {
        enableScrolling();
        if(events.animationEnd){
            document.dispatchEvent(events.animationEnd);
        }
    }
    useEffect(() => {   
        const eventMap: EventsStateType = {
            animationEnd: undefined,
            animationStart: undefined,
            exitComplete: undefined
        };
        eventNames.forEach((eventName) => {
            const event = new Event(eventName,{bubbles: true,cancelable: false});
            eventMap[eventName] = event;
        });
        setEvents({...eventMap});
    },[]);

    const registerAnimationEvent: RegisterAnimationEvent  = ({eventType, callback}) => {

    

        document.addEventListener(eventType, callback);

        const removeListener = () => {
            document.removeEventListener(eventType, callback);
        }

        return removeListener
    };

    const providerValue: PageTransitionProviderValue = {
        registerAnimationEvent
    };
    
    const PageTransitionComponents: Record<PageTransitionType, FC<PageTransitionProps>> = {
        "none": NoneTransition,
        "FullScreenSlide": FullScreenSlideTransition
    };
    const PageTransitionComponent = PageTransitionComponents[pageTransitionType];

    return (
        <AnimatePresence mode={mode} onExitComplete={onExitComplete} >
            <PageTransitionComponent key={key} onAnimationStart={onAnimationStart} onAnimationEnd={onAnimationEnd} >
                <pageTransitionContext.Provider value={providerValue}>
                    <FrozenRouter>{children}</FrozenRouter>
                </pageTransitionContext.Provider>
            </PageTransitionComponent>                    
        </AnimatePresence>
    );
};

export default AnimatePresenceContextProvider;

const usePageTransitionContext = () => {
    if(!pageTransitionContext) {
        console.warn("you might forgot to wrap AnimatePresenceContextProvider")
    }
    return useContext(pageTransitionContext)
};

const usePageTransitionEventListener = (params: RegisterAnimationEventParams) => {
    const context = usePageTransitionContext();
    useEffect(() => {
        if(context){
            const removeListener = context.registerAnimationEvent(params);
            return removeListener
        }
    },[context, params])
}

export { usePageTransitionContext, usePageTransitionEventListener }