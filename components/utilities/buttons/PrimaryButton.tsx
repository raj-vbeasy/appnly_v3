import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, MouseEventHandler, Ref } from 'react'

interface Props{
    children?: string,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLButtonElement> | undefined,
    onClick?: MouseEventHandler<HTMLButtonElement>
    type?: "button" | "submit" | "reset"
    disabled?: boolean
}

const PrimaryButton: FC<Props> = ({children, ref, className, style, onClick, type, disabled}) => {
    return (
        <button
            onClick={onClick}
            type={type || "button"}
            disabled={disabled}
            ref={ref}
            className={cn(
                `
                    px-10
                    py-3
                    rounded-[8px]
                    bg-primary
                    w-fit
                    text-background

                    font-elza
                    font-normal
                    text-[16px]
                    leading-[1]
                    
                    cursor-pointer
                    
                    xs:mx-auto
                    sm:mx-auto
                    md:mx-auto
                `,
                className
            )}
            style={style}
        >
            {children}
     
        </button>
    );
};

export default PrimaryButton;