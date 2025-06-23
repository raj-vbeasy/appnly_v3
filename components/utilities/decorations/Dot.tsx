import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, Ref } from 'react'

interface Props{
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLDivElement> | undefined
}

const Line: FC<Props> = ({className,ref,style}) => {
    return (
        <div className={cn('bg-secondary h-[5px] lg:h-[3px] w-full',className)} style={style} ref={ref}></div>
    );
};

export default Line;