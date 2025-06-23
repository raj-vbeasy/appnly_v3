"use client"

import { FC } from 'react'
import { motion, Variants } from "framer-motion"
import { PageTransitionProps } from './types/PageTransitionProps'







const slidesVariants: Variants = {
    initial: { 
        y: "100%"
    },
    animate: { 
        y: ["100%","0%","0%","-100%"],
        transition: {
            duration: 1.2,
            ease: [0.33, 1, 0.68, 1],
            times: [0, 0.4,0.6, 1]
        }
    },
    exit: { 
        clipPath: ["inset(101% 0% 0% 0% )","inset(-1% 0% 0% 0% )","inset(-1% 0% 0% 0%)","inset(-1% 0% 0% 0%)"],
        y: ["0%","0%","0%","-100%"],
        transition: {
            duration: 1.5,
            ease: [0.45, 0, 0.55, 1],
            times: [0, 0.4,0.6, 1]
        }
    },

}

const outVariants: Variants = {
    initial: { 
   
    },
    animate: { 
    },
    exit: { 
        opacity: [1,1,0,0],
        transition: {
            duration: 1.5,
            ease: [0.45, 0, 0.55, 1],
            times: [0, 0.4,0.6, 1]
        }
    },

}
const anim = (variants: Variants) => {
    return {
        initial: "initial",
        // animate: "animate",
        exit: "exit",
        variants
    }
}

const FullScreenSlideTransition: FC<PageTransitionProps> = ({children, onAnimationStart = () => {}, onAnimationEnd = () => {}}) => {
    

    return (
        <>
            <motion.div 
                className='fixed top-0 left-0 right-0 w-screen h-screen pointer-events-none overflow-clip z-50 '
            >
                <motion.div
                    onAnimationStart={onAnimationStart}
                    onAnimationComplete={onAnimationEnd}
                    {...anim(slidesVariants)}
                    className='bg-white w-screen h-screen text-black uppercase flex justify-center items-center'
                >
                </motion.div>
            </motion.div>
    
            <motion.div
                {...anim(outVariants)}
                className='w-full'
            >
                {children}
            </motion.div>

        </>
    );
};

export default FullScreenSlideTransition;