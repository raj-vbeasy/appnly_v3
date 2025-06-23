"use client"
import { FC } from 'react'
import { PageTransitionProps } from './types/PageTransitionProps';



const NoneTransition: FC<PageTransitionProps> = ({children}) => {
    return (<>{children}</>)
};

export default NoneTransition;