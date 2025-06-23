import { AnimationDefinition } from "framer-motion";
import { ReactNode } from "react";

export type PageTransitionProps = {
    children: ReactNode,
    onAnimationStart?: (definition: AnimationDefinition) => void,
    onAnimationEnd?: (definition: AnimationDefinition) => void,
}


