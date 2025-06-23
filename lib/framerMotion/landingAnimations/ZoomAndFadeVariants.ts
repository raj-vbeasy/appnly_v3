import { Transition, Variants } from "framer-motion"

interface FadingAnimationProps{
    transition?: Transition,
    opacity?: {
        from: number,
        to: number
    },
    scale?: {
        from: number,
        to: number
    }
}

export const getZoomAndFadeAnimationVariants: (props?: FadingAnimationProps) => Variants = ({
    transition,
    opacity = {
        from: 0,
        to: 1
    },
    scale = {
        from: 1.2,
        to: 1
    }
} = {}) => {


    return {
        initial: { 
            opacity: opacity.from,
            scale: scale.from
        },
        animate: { 
            opacity: opacity.to,
            scale: scale.to,
            transition: {
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
                ...transition
            }
        },

    }

}

export const getZoomAndFadeAnimationAttributes = (props: FadingAnimationProps = {}) => {
    return {
        initial: "initial",
        animate: "animate",
        variants: getZoomAndFadeAnimationVariants(props)
    }
}
