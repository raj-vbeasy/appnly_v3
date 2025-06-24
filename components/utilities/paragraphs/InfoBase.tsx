// InfoBase.tsx
import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLSpanElement> | undefined
}

const InfoBase: FC<Props> = ({children, ref, className, style}) => {
    return (
        <span
            ref={ref}
            className={cn(
                `
                    font-acumin
                    font-medium
                    [--info-base-font-size:16px]
                    lg:[--info-base-font-size:15px]
                    md:[--info-base-font-size:14px]
                    sm:[--info-base-font-size:14px]
                    xs:[--info-base-font-size:13px]
                    
                    text-[length:var(--info-base-font-size)] 
                    leading-[1.1]
                    sm:leading-[1.2]
                    tracking-normal
                    text-secondary
                `,
                className
            )}
            style={style}
        >
            {children}
        </span>
    );
};

export default InfoBase;