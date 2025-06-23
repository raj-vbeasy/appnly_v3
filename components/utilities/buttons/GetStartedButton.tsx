import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, MouseEventHandler, Ref } from 'react'
import Arrow from '../svg/Arrow';

interface Props{
    children?: string,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLButtonElement> | undefined,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    type?: "solid" | "hollow"
}


const GetStartedButton: FC<Props> = ({children, ref, className, style, onClick,type = "solid"}) => {
    return (
        <button
            onClick={onClick}
            ref={ref}
            className={cn(
                `
                    px-4
                    py-2.5
                    flex 
                    justify-between
                    items-center
                    rounded-[8px]
                    
                    text-[18px]
                    lg:text-[16px]
                    leading-[1]
                    font-elza
                    font-medium

                    cursor-pointer
                `,
                {
                    "bg-primary text-background": type === "solid",
                    "text-primary border-secondary border-[1px] border-solid": type === "hollow"
                },
                className
            )}
            style={style}
        >
            {children}
            <Arrow className={
                cn(
                    'h-[32px] aspect-square',
                    {
                        "text-background": type === "solid",
                        "text-secondary": type === "hollow",
                    }

                )
            } />
        </button>
    );
};

export default GetStartedButton;