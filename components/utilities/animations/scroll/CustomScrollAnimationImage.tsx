import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, useEffect, useRef } from 'react';
import gsap, { Cubic } from "gsap"
import { blindFlippingProps, ScrollAnimationProps } from './types/ScrollAnimationProps';
import Image from 'next/image';
import { generateMask, UpdateProgressMapByProgress } from '../general/blindFlippingTransition';




interface Props extends ScrollAnimationProps, blindFlippingProps{

    className?: string,
    style?: CSSProperties,

    src: string,
    alt: string,
    sizes?: string
}

const CustomScrollAnimationImage: FC<Props> = ({
    src,
    alt,
    sizes,

    scrollTriggerVars,
    styleTo,
    styleFrom,

    className,
    style,

    stagger,
    delay,
    duration = 1,
    ease = Cubic.easeOut,

    trigger,
    endTrigger,
    pin,
    
    blindFlipping
}) => {
    const ImageRef = useRef<HTMLImageElement>(null);



    useEffect(() => {

        let _trigger:  undefined | gsap.DOMTarget = undefined, 
        _endTrigger:  undefined | gsap.DOMTarget = undefined,
        _pin:  boolean | gsap.DOMTarget | undefined = pin;

        const img = ImageRef.current;
        if(trigger === "self"){
            _trigger = img;
        }else if(trigger !== undefined){
            _trigger = trigger.current;
        }
        if(endTrigger === "self"){
            _endTrigger = img;
        }else if(endTrigger !== undefined){
            _endTrigger = endTrigger.current;
        }

        if(pin === "self"){
            _pin = img;
        }

        const ctx = gsap.context(
            () => {
                let updateMask: UpdateProgressMapByProgress;
                if(blindFlipping !== undefined && img !== null){
                    const { maskImageString, updateProgressMapByProgress} = generateMask(blindFlipping.strips, blindFlipping.gradientDirection);
                    updateMask = updateProgressMapByProgress;
                    gsap.set(img,{
                        maskImage: maskImageString
                    })
                    
                }
                const tween = gsap.to(img,{
                    ...styleTo,
                    stagger,
                    ease,
                    duration,
                    delay,
                    scrollTrigger: {
                        trigger: _trigger,
                        endTrigger: _endTrigger,
                        pin: _pin,
                        ...scrollTriggerVars,
                        onUpdate: (self) => {
                            if( typeof updateMask === 'function' && blindFlipping  !== undefined){
                                const mask = updateMask({
                                    progress: self.progress,
                                    stagger: blindFlipping.stagger,
                                    easingFunction: blindFlipping.easingFunction
                                });
                                gsap.set(img,{
                                    maskImage: mask
                                })
                            }

                            if(scrollTriggerVars?.onUpdate){
                                scrollTriggerVars?.onUpdate(self);
                            }

                            
                        }
                    }
                });
    
                return tween
            }
        )
        return () => {
            ctx.revert();
        }
     
    },[scrollTriggerVars,delay,duration,ease,stagger,styleTo,trigger,endTrigger,pin])


    return (
        <Image
            ref={ImageRef}
            src={src}
            alt={alt}
            sizes={sizes}
            fill
            priority
            className={cn("object-cover",className)}
            style={{
                ...styleFrom,
                ...style  
            }}

        />

   
    )
}
export default CustomScrollAnimationImage