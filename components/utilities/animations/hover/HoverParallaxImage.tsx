import { cn } from '@/lib/tailwind/cn';
import Image from 'next/image';
import { CSSProperties, FC, MouseEventHandler, Ref, useImperativeHandle, useRef } from 'react'

interface Props{
    src: string, 
    alt: string,

    width?: number,
    height?: number,
    fill?: boolean,
    sizes?: string,

    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLDivElement> | undefined,

    imageClassName?: string
    imageStyle?: CSSProperties,
}

const HoverParallaxImage: FC<Props> = ({src, alt, style, className, ref ,fill, height, width,imageClassName,imageStyle,sizes}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const onMouseMoveHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        const container = containerRef.current;
        const img = imageRef.current;
        if(container && img){
            const { top, left, width, height } = container.getBoundingClientRect();
            const { width: imgWidth, height: imgHeight } = img.getBoundingClientRect();
         
            const x = e.clientX - left - ( width / 2 );
            const y = e.clientY - top - ( height / 2 );
            const XPercentage = x / ( width / 2 );
            const yPercentage = y / ( height / 2 );
          
            const offset = {
                x: Math.round(Math.floor(imgWidth - width) / 2 * 0.8 * XPercentage * -1),
                y: Math.round(Math.floor(imgHeight - height) / 2 * 0.8 * yPercentage * -1),
            }
            
            img.style.transform = `translate(${offset.x}px, ${offset.y}px)`
  
      

            // const rotateX = ( y / height ) * (rotateFactor * -1);
            // const rotateY = ( x / width ) * rotateFactor;
            // container.style.transformStyle = "preserve-3d"
            // container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }
    }
    const onMouseLeaveHandler:  MouseEventHandler<HTMLDivElement> = () => {
        const img = imageRef.current;
        if(img){
            
              img.style.transform = `translate(0px, 0px)`
        }
    }
    useImperativeHandle<(HTMLDivElement | null), (HTMLDivElement | null)>(ref, () => containerRef.current, []);
    return (
        <div 
            className={
                cn(
                    'w-full h-full overflow-clip relative',
                    className
                )
            }
            ref={containerRef}
            style={style}
            onMouseMove={onMouseMoveHandler}
            onMouseLeave={onMouseLeaveHandler}
        >
            <Image 
                ref={imageRef}
                src={src}
                alt={alt}
                sizes={sizes}
                priority
                className={cn('object-cover scale-120 inline-block',imageClassName)}
                style={{
                    transition: "transform 0.15s linear",
                    ...imageStyle
                }}
                fill={fill}
                width={width}
                height={height}
            />
        </div>
    );
};

export default HoverParallaxImage;