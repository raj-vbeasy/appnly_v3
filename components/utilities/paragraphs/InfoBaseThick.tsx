import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLSpanElement> | undefined
}
const InfoBaseThick: FC<Props> = ({children, ref, className, style}) => {
    return (
        <span
            ref={ref}
            className={cn(
                `
                    font-acumin
                    font-semibold
                    [--info-base-thick-font-size:16px]
           
                    text-[length:var(--info-base-thick-font-size)] 
                    leading-[1]
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

export default InfoBaseThick;