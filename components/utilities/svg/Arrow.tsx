import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, Ref } from 'react'

interface Props{
    className?: string,
    style?: CSSProperties,
    ref?: Ref<SVGSVGElement> | undefined
}

const Arrow: FC<Props> = ({className,ref,style}) => {
    return (
    <svg 
        ref={ref}
        className={
            cn("text-white w-[34px] h-[34px]",className)
        }
        style={style}
        width="20" 
        height="20" 
        viewBox="0 0 20 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M3 10C3 9.58579 3.33579 9.25 3.75 9.25L14.3879 9.25L10.2302 5.29062C9.93159 5.00353 9.92228 4.52875 10.2094 4.23017C10.4965 3.93159 10.9713 3.92228 11.2698 4.20938L16.7698 9.45938C16.9169 9.60078 17 9.79599 17 10C17 10.204 16.9169 10.3992 16.7698 10.5406L11.2698 15.7906C10.9713 16.0777 10.4965 16.0684 10.2094 15.7698C9.92228 15.4713 9.93159 14.9965 10.2302 14.7094L14.3879 10.75L3.75 10.75C3.33579 10.75 3 10.4142 3 10Z" fill="currentColor"/>
    </svg>


    );
};

export default Arrow;