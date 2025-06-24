import { CSSProperties, FC, ReactNode } from 'react'
import CustomScrollAnimation from './CustomScrollAnimation';
import { ScrollAnimationProps, SplitTextProps } from './types/ScrollAnimationProps';
import { Quint }from "gsap"

interface Props extends ScrollAnimationProps, SplitTextProps{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
}


const FadeInScrollAnimation: FC<Props> = ({
    children, 
    duration = 0.75,
    ease = Quint.easeOut,
    ...rest
}) => {
    return (
        <CustomScrollAnimation
            styleFrom={{
                opacity: 0

            }}
            styleTo={{
                opacity: 1
            }}
            duration={duration}
            ease={ease}
            {...rest}
        >
            {children}
        </CustomScrollAnimation>
    );
};

export default FadeInScrollAnimation;