import { CSSProperties, FC, ReactNode } from 'react'
import CustomScrollAnimation from './CustomScrollAnimation';
import { ScrollAnimationProps, SplitTextProps } from './types/ScrollAnimationProps';
import { Cubic }from "gsap"

interface Props extends ScrollAnimationProps, SplitTextProps{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
}


const TextRevealScrollAnimation: FC<Props> = ({
    children, 
    duration = 0.75,
    ease = Cubic.easeOut,
    ...rest
}) => {
    return (
        <CustomScrollAnimation
            styleFrom={{
                clipPath: "inset(0% 0% 101%  0%)",
                transform: "translateY(100%)",
            

            }}
            styleTo={{
                clipPath: "inset(0% 0% -1%  0%)",
                transform: "translateX(0%)",
            }}
            duration={duration}
            ease={ease}
            {...rest}
        >
            {children}
        </CustomScrollAnimation>
    );
};

export default TextRevealScrollAnimation;