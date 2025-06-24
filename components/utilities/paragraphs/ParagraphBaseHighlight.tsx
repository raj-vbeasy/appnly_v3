import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLParagraphElement> | undefined
}
const ParagraphBaseHighlight: FC<Props> = ({children, ref, className, style}) => {
    return (
        <p
            ref={ref}
            className={cn(
                `
                    font-acumin
                    font-bold
                    [--paragraph-base-highlight-font-size:18px]
                    lg:[--paragraph-base-highlight-font-size:16px]
                    text-[length:var(--paragraph-base-highlight-font-size)] 
                    leading-[1.2]
                    tracking-normal
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

export default ParagraphBaseHighlight;