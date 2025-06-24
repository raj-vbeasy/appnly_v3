import { usePageTransitionEventListener } from '@/lib/framerMotion/AnimatePresenceContextProvider';
import SplitText from '@/lib/gsap/SplitText';
import { cn } from '@/lib/tailwind/cn';
import { useGSAP } from '@gsap/react';
import gsap, { Cubic } from "gsap"
import { CSSProperties, FC, ReactNode, useRef } from 'react';





export interface MaskAndMoveLandingAnimationProps {
    opacity?: {
        from: number,
        to: number
    },
    zoom?: {
        from: number,
        to: number
    }
    duration?: number,
    delay?: number,
    ease?: gsap.EaseFunction | gsap.EaseString | undefined,

    splitText?: string | undefined,
    splitTextMode?: "words" | "characters",
    stagger?: gsap.NumberValue | gsap.StaggerVars | undefined

    splitTextClassName?: string,
    splitTextStyle?: CSSProperties,
}
interface Props extends MaskAndMoveLandingAnimationProps{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
}

const ZoomAndFadeLandingAnimation: FC<Props> = ({
    children, 

    opacity = {
        from: 0,
        to: 1
    },
    zoom = {
        from: 1.3,
        to: 1
    },

    duration = 1,
    delay,
    ease = Cubic.easeOut,

    className,
    style,

    splitText,
    splitTextMode,
    stagger,

    splitTextClassName,
    splitTextStyle
}) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const characterRefs = useRef<(HTMLSpanElement | null)[][]>([[]]);
    const { contextSafe } = useGSAP();
    const animationEnd = () => {
        if(contextSafe){
            const runTween = contextSafe(() => {
                const elements = isSplitTextDisabled ? containerRef.current : characterRefs.current.flat();

                const tween = gsap.to(elements, {
                    opacity: opacity.to,
                    scale: zoom.to,
                    duration,
                    ease,
                    delay,
                    stagger
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

    const isSplitTextDisabled = splitText === undefined ;

    return (
        <span 
            ref={containerRef} 
            className={
                cn(
                    "inline-block",
                    className
                )
            }
 
            style={
                isSplitTextDisabled ? {
                    opacity: opacity.from,
                    scale: zoom.from,
                    ...style  
                } : style
            }
        >
            {
                isSplitTextDisabled ? (
                        <>{children}</>
                    ) : (
                        <SplitText 
                            text={splitText}
                            splitTextMode={splitTextMode}
                            ref={characterRefs}
                            style={{
                                opacity: opacity.from,
                                scale: zoom.from,
                                ...splitTextStyle
                            }}
                            className={splitTextClassName}
                        />
                    ) 
            }
        </span>
    )
}
export default ZoomAndFadeLandingAnimation