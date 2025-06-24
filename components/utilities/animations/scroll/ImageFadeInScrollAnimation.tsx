import { CSSProperties, FC, ReactNode } from 'react'
import CustomScrollAnimation from './CustomScrollAnimation';
import { ScrollAnimationProps } from './types/ScrollAnimationProps';
import { Linear }from "gsap"

interface Props extends ScrollAnimationProps{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
}


const ImageFadeInScrollAnimation: FC<Props> = ({
    children, 
    duration = 0.6,
    ease = Linear.easeNone,
    ...rest
}) => {
    return (
        <CustomScrollAnimation
            styleFrom={{
                scale: 1.2,
                opacity: 0

            }}
            styleTo={{
                scale: 1,
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

export default ImageFadeInScrollAnimation;