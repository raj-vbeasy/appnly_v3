import { CSSProperties, FC, ReactNode } from 'react'
import CustomScrollAnimation from './CustomScrollAnimation';
import { ScrollAnimationProps } from './types/ScrollAnimationProps';
import { Quint }from "gsap"

interface Props extends ScrollAnimationProps{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
}


const ImageRevealScrollAnimation: FC<Props> = ({
    children, 
    duration = 1.2,
    ease = Quint.easeOut,
    ...rest
}) => {
    return (
        <CustomScrollAnimation
            styleFrom={{
                scale: 1.35,
                clipPath: "inset(0% 101% 0% 0%)",
                transform: "translateX(-17.5%)",

            }}
            styleTo={{
                scale: 1,
                clipPath: "inset(0% -1% 0% 0%)",
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

export default ImageRevealScrollAnimation;