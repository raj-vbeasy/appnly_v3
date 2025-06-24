import { usePageTransitionEventListener } from '@/lib/framerMotion/AnimatePresenceContextProvider';
import SplitText from '@/lib/gsap/SplitText';
import { cn } from '@/lib/tailwind/cn';
import { useGSAP } from '@gsap/react';
import gsap, { Cubic } from "gsap"
import { CSSProperties, FC, ReactNode, useRef } from 'react';





export interface MaskAndMoveLandingAnimationProps {
    styleFrom?: CSSProperties,
    styleTo?: CSSProperties,

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

const CustomLandingAnimation: FC<Props> = ({
    children, 

    styleFrom,
    styleTo,

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
                    ...styleTo,
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
                    ...styleFrom,
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
                                ...styleFrom,
                                ...splitTextStyle
                            }}
                            className={splitTextClassName}
                        />
                    ) 
            }
        </span>
    )
}
export default CustomLandingAnimation