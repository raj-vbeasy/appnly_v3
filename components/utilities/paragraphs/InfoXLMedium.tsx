import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLSpanElement> | undefined
}

const InfoXLMedium: FC<Props> = ({children, ref, className, style}) => {
    return (
        <span
            ref={ref}
            className={cn(
                `
                    font-acumin
                    font-medium
                    [--info-xl-medium-font-size:20px]
                
                    text-[length:var(--info-xl-medium-font-size)] 
                    leading-[1]
                    tracking-[calc(var(--info-xl-medium-font-size)*0.025)]
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

export default InfoXLMedium;