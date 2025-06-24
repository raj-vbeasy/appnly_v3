import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLParagraphElement> | undefined
}
const ParagraphBaseMediumRelax: FC<Props> = ({children, ref, className, style}) => {
    return (
        <p
            ref={ref}
            className={cn(
                `
                    font-acumin
                    font-medium
                    [--paragraph-base-medium-relax-font-size:18px]
                    lg:[--paragraph-base-highlight-font-size:16px]
                    text-[length:var(--paragraph-base-medium-relax-font-size)] 
                    leading-[1.2]
                    tracking-[calc(var(--paragraph-base-medium-relax-font-size)*0.025)]
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

export default ParagraphBaseMediumRelax;