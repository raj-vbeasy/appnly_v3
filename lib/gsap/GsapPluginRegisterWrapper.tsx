'use client';
import { FC, ReactNode } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import { SplitText } from 'gsap/SplitText';

interface Props{
    children: ReactNode
}
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);

const GsapPluginRegisterWrapper: FC<Props> = ({children}) => {
    return (
        <>{children}</>
    );
};

export default GsapPluginRegisterWrapper;