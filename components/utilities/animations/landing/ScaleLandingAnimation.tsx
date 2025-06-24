import { usePageTransitionEventListener } from '@/lib/framerMotion/AnimatePresenceContextProvider';
import { cn } from '@/lib/tailwind/cn';
import { useGSAP } from '@gsap/react';
import gsap, { Cubic } from "gsap"
import { CSSProperties, FC, ReactNode, useRef } from 'react';



export interface MaskAndMoveLandingAnimationProps {

    scaleFactor?: {
        from: {
            x: number,
            y: number
        },
        to: {
            x: number,
            y: number
        }
    },
    duration?: number,
    delay?: number,
    ease?: gsap.EaseFunction | gsap.EaseString | undefined,

}
interface Props extends MaskAndMoveLandingAnimationProps{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
}


const ScaleLandingAnimation: FC<Props> = ({
    children, 

    scaleFactor = {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: 1,
            y: 1
        }
    },

    duration = 1,
    delay,
    ease = Cubic.easeOut,

    className,
    style,

}) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const { contextSafe } = useGSAP();
    const animationEnd = () => {
            if(contextSafe){
                const runTween = contextSafe(() => {
                    const elements = containerRef.current;
                    const tween = gsap.to(elements, {
                        transform: `scale(${scaleFactor.to.y}, ${scaleFactor.to.x})`,
                        duration,
                        ease,
                        delay,
                  
                    })
                    return tween 
                });
                runTween();
            }
        }
    usePageTransitionEventListener({
        eventType: "animationEnd",
        callback: animationEnd
        
    }); 


    return (
        <span 
            ref={containerRef} 
            className={
                cn(
                    "inline-block origin-center",
                    className
                )
            }
 
            style={{
                transform: `scale(${scaleFactor.from.y}, ${scaleFactor.from.x})`,
                ...style
            }}
        >
            {<>{children}</>}
        </span>
    )
}
export default ScaleLandingAnimation