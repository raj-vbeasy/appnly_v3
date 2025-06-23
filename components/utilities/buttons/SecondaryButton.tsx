import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, MouseEventHandler, Ref } from 'react'

interface Props{
    children?: string,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLButtonElement> | undefined,
    onClick?: MouseEventHandler<HTMLButtonElement>
}


const SecondaryButton: FC<Props> = ({children, ref, className, style, onClick}) => {
    return (
        <button
            onClick={onClick}
            ref={ref}
            className={cn(
                `   
                    border-[1px]
                    border-surface-outline
                    border-solid

                    bg-surface-light
                    px-5
                    py-3
                    
                    cursor-pointer
                `,
                className
            )}
            style={style}
        >
            {children}
        </button>
    );
};

export default SecondaryButton;