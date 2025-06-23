import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeadingFourthXL: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h1 
            ref={ref}
            className={cn(
                `
                    font-elza
                    font-medium
                    [--heading-Fourth-xl-font-size:48px]
                    lg:[--heading-Fourth-xl-font-size:42px]
                    md:[--heading-Fourth-xl-font-size:36px]
                    sm:[--heading-Fourth-xl-font-size:32px]
                    xs:[--heading-Fourth-xl-font-size:28px]
                    
                    text-[length:var(--heading-Fourth-xl-font-size)] 
                    leading-[1.2]
                    tracking-normal
                    text-primary
                `,
                className
            )}
            style={style}
        >
            {children}
        </h1>
    );
};

export default HeadingFourthXL;