import { usePageTransitionEventListener } from '@/lib/framerMotion/AnimatePresenceContextProvider';
import SplitText from '@/lib/gsap/SplitText';
import { cn } from '@/lib/tailwind/cn';
import { useGSAP } from '@gsap/react';
import gsap, { Cubic } from "gsap"
import { CSSProperties, FC, ReactNode, useRef } from 'react';



type RevealDirection = "top" | "bottom" | "left" | "right";

const getStylesMap: {[key in RevealDirection]: {
    // clipPath: string,
    transform: (displacement: number) => string,
    clipPath: (clipPathDepth: number) =>  string,
}} = {
    "bottom": {
        transform: (displacement) => {
            return `translateY(-${displacement}%)`

        },
        clipPath: (clipPathDepth) => `inset(${clipPathDepth}% 0% 0% 0%)`,
    },
    "top": {
        transform: (displacement) => {
            return `translateY(${displacement}%)`

        },
        clipPath: (clipPathDepth) => `inset(0% 0% ${clipPathDepth}% 0%)`,
    },
    "left": {
        transform: (displacement) => {
            return `translateX(${displacement}%)`
        },
        clipPath: (clipPathDepth) => `inset(0% ${clipPathDepth}% 0% 0%)`,
    },
    "right": {
        transform: (displacement) => {
            return `translateX(-${displacement}%)`
        },
        clipPath: (clipPathDepth) => `inset(0% 0% 0% ${clipPathDepth}%)`,
    },
}

export interface MaskAndMoveLandingAnimationProps {
    direction?: RevealDirection,
    transformDisplacement?: {
        from: number,
        to: number
    },
    clipPathDepth?: {
        from: number,
        to: number
    },

    duration?: number,
    delay?: number,
    ease?: gsap.EaseFunction | gsap.EaseString | undefined,

    splitText?: string | undefined,
    splitTextMode?: "words" | "characters",
    stagger?: gsap.NumberValue | gsap.StaggerVars | undefined,

    splitTextClassName?: string,
    splitTextStyle?: CSSProperties,

}

interface Props extends MaskAndMoveLandingAnimationProps{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,

}

const MaskAndMoveLandingAnimation: FC<Props> = ({
    children, 

    direction = "top",
    clipPathDepth = {
        from: 101,
        to: -1
    },
    transformDisplacement = {
        from: 100,
        to: 0
    },

    splitText,
    splitTextMode = "words",

    duration = 1,
    delay,
    ease = Cubic.easeOut,
    stagger = 0,

    className,
    style,

    splitTextClassName,
    splitTextStyle
}) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const characterRefs = useRef<(HTMLSpanElement | null)[][]>([[]]);

 
    const { contextSafe } = useGSAP();
    const isSplitTextDisabled = splitText === undefined ;

    const animationEnd = () => {
        if(contextSafe){
            const runTween = contextSafe(() => {
                const elements = isSplitTextDisabled ? containerRef.current : characterRefs.current.flat();

                const tween = gsap.to(elements, {
                    transform: getStylesMap[direction].transform(transformDisplacement.to),
                    clipPath: getStylesMap[direction].clipPath(clipPathDepth.to),
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
                    transform: getStylesMap[direction].transform(transformDisplacement.from),
                    clipPath: getStylesMap[direction].clipPath(clipPathDepth.from),
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
                            transform: getStylesMap[direction].transform(transformDisplacement.from),
                            clipPath: getStylesMap[direction].clipPath(clipPathDepth.from),
                            ...splitTextStyle
                        }}
                        className={splitTextClassName}
                    />
                ) 
            }
            
        </span>
    )
}
export default MaskAndMoveLandingAnimation