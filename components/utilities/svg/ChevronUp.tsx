import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, Ref } from 'react'

interface Props{
    className?: string,
    style?: CSSProperties,
    ref?: Ref<SVGSVGElement> | undefined
}

const ChevronUp: FC<Props> = ({className,ref,style}) => {
    return (
        <svg 
            ref={ref} 
            width="16"
            height="16"
            className={
                cn("text-white w-[16px] h-[16px]",className)
            }
            style={style}
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M4.21967 6.21967C4.51256 5.92678 4.98744 5.92678 5.28033 6.21967L8 8.93934L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L8.53033 10.5303C8.23744 10.8232 7.76256 10.8232 7.46967 10.5303L4.21967 7.28033C3.92678 6.98744 3.92678 6.51256 4.21967 6.21967Z" fill="currentColor"/>
        </svg>

    );
};

export default ChevronUp;