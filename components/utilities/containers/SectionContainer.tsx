import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLElement> | undefined,
}

const SectionContainer: FC<Props> = ({children,className,ref,style}) => {
    return (
        <section 
            className={
                cn(
                    `
                        max-w-[1280px]
                        mx-[clamp(74px,calc(((100vw-1024px)/896*0)+74px),74px)]
                        lg:mx-[60px]
                        md:mx-[40px]
                        sm:mx-[24px]
                        xs:mx-[16px]
                        w-full
                        flex 
                        flex-col
                    `,
                    className
                )
            } 
            ref={ref} 
            style={style}
        >
            {children}
        </section>
    );
};

export default SectionContainer;