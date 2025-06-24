import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLParagraphElement> | undefined
}

const ParagraphTwiceXLMediumRelax: FC<Props> = ({children, ref, className, style}) => {
    return (
        <p
            ref={ref}
            className={cn(
                `
                    font-acumin
                    font-medium
                    [--paragraph-twice-xl-medium-relax-font-size:28px]
                    lg:[--paragraph-twice-xl-medium-relax-font-size:26px]
                    md:[--paragraph-twice-xl-medium-relax-font-size:24px]
                    sm:[--paragraph-twice-xl-medium-relax-font-size:22px]
                    xs:[--paragraph-twice-xl-medium-relax-font-size:20px]
                    
                    text-[length:var(--paragraph-twice-xl-medium-relax-font-size)] 
                    leading-[1.2]
                    tracking-[calc(var(--paragraph-twice-xl-medium-relax-font-size)*0.025)]
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

export default ParagraphTwiceXLMediumRelax;