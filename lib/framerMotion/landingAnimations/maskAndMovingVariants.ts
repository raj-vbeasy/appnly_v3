import { Transition, Variants } from "framer-motion"


interface MovingInAnimationProps{
    transition?: Transition,
    direction?: RevealDirection,
    clipPathDepth?: {
        from: number;
        to: number;
    },
    displacement?: {
        from: number;
        to: number;
    }
}
type RevealDirection = "top" | "bottom" | "left" | "right";

const getStylesMap: {[key in RevealDirection]: {
    // clipPath: string,
    transform: (displacement: number) => {
        x: string | undefined,
        y: string | undefined
    },
    clipPath: (clipPathDepth: number) =>  string,
}} = {
    "bottom": {
        transform: (displacement) => {
            return {
                x: undefined,
                y: `-${displacement}%`
            }
        },
        clipPath: (clipPathDepth) => `inset(${clipPathDepth}% 0 0 0)`,
    },
    "top": {
        transform: (displacement) => {
            return {
                x: undefined,
                y: `${displacement}%`
            }
        },
        clipPath: (clipPathDepth) => `inset(0 0 ${clipPathDepth}% 0)`,
    },
    "left": {
        transform: (displacement) => {
            return {
                x: `${displacement}%`,
                y: undefined
            }
        },
        clipPath: (clipPathDepth) => `inset(0 ${clipPathDepth}% 0 0)`,
    },
    "right": {
        transform: (displacement) => {
            return {
                x: `-${displacement}%`,
                y: undefined
            }
        },
        clipPath: (clipPathDepth) => `inset(0 0 0 ${clipPathDepth}%)`,
    },
}

export const getMaskAndMovingAnimationVariants: (props: MovingInAnimationProps) => Variants = ({
    transition,
    direction = "top",
    clipPathDepth = {
        from: 101,
        to: -1
    },
    displacement = {
        from: 100,
        to: 0
    }
} = {}) => {


    return {
        initial: { 
            ...getStylesMap[direction].transform(displacement.from),
            clipPath: getStylesMap[direction].clipPath(clipPathDepth.from)
        
        },
        animate: { 
            ...getStylesMap[direction].transform(displacement.to),
            clipPath: getStylesMap[direction].clipPath(clipPathDepth.to),
            transition: {
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
                ...transition
            }
        },
    }

}

export const getMaskAndMovingAnimationAttributes = (props: MovingInAnimationProps = {}) => {
    return {
        initial: "initial",
        animate: "animate",
        variants: getMaskAndMovingAnimationVariants(props)
    }
}
