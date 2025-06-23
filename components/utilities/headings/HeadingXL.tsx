import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeadingXL: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h3
            ref={ref}
            className={cn(
                `
                    font-elza
                    font-medium
                    [--heading-xl-font-size:24px]
                    lg:[--heading-xl-font-size:22px]
                    md:[--heading-xl-font-size:21px]
                    sm:[--heading-xl-font-size:20px]
                    xs:[--heading-xl-font-size:18px]
                    
                    text-[length:var(--heading-xl-font-size)] 
                    leading-[1.1]
                    tracking-normal
                    text-secondary
                `,
                className
            )}
            style={style}
        >
            {children}
        </h3>
    );
};

export default HeadingXL;