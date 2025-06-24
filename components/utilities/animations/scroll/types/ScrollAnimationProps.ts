import { CSSProperties, RefObject } from "react";
import { GradientDirection } from "../../general/blindFlippingTransition";

export interface SplitTextProps{
    splitText?: string | undefined,
    splitTextMode?: "words" | "characters",
    splitTextClassName?: string,
    splitTextStyle?: CSSProperties,
}
export interface ScrollAnimationProps {

    scrollTriggerVars?: ScrollTrigger.Vars,
    styleFrom?: CSSProperties,
    styleTo?: CSSProperties,

    duration?: number,
    ease?: gsap.EaseFunction | "none",
    delay?: number,
    stagger?: gsap.NumberValue | gsap.StaggerVars | undefined

    pin?: boolean | "self",
    trigger?: "self" | RefObject<HTMLElement | null> | undefined,
    endTrigger?: "self" | RefObject<HTMLElement | null> | undefined,
    
}
export interface blindFlippingProps {
    blindFlipping?: {
        strips?: number,
        gradientDirection?: GradientDirection,
        stagger?: number,
        easingFunction?: (t: number) => number
    }
}