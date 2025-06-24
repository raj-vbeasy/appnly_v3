import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLParagraphElement> | undefined
}

const ParagraphBaseRelax: FC<Props> = ({children, ref, className, style}) => {
    return (
        <p
            ref={ref}
            className={cn(
                `
                    font-acumin
                    font-normal
                    [--paragraph-base-relax-font-size:18px]
                    lg:[--paragraph-base-relax-font-size:17px]
                    md:[--paragraph-base-relax-font-size:16px]
                    sm:[--paragraph-base-relax-font-size:15px]
                    xs:[--paragraph-base-relax-font-size:14px]
                    
                    text-[length:var(--paragraph-base-relax-font-size)] 
                    leading-[1.2]
                    sm:leading-[1.3]
                    tracking-[calc(var(--paragraph-base-relax-font-size)*0.025)]
                    text-secondary
                `,
                className
            )}
            style={style}
        >
            {children}
        </p>
    );
};

export default ParagraphBaseRelax;