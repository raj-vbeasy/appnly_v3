import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeadingTwiceXL: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h2
            ref={ref}
            className={cn(
                `
                    font-elza
                    font-medium
                    [--heading-twice-xl-font-size:28px]
                    lg:[--heading-twice-xl-font-size:26px]
                    md:[--heading-twice-xl-font-size:24px]
                    sm:[--heading-twice-xl-font-size:22px]
                    xs:[--heading-twice-xl-font-size:20px]
                    
                    text-[length:var(--heading-twice-xl-font-size)] 
                    leading-[1]
                    tracking-normal
                    text-secondary
                `,
                className
            )}
            style={style}
        >
            {children}
        </h2>
    );
};

export default HeadingTwiceXL;