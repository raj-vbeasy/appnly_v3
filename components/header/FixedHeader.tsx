"use client"
import { FC } from 'react'
import Logo from './widget/Logo';
import Nav from './widget/Nav';
import SectionContainer from '../utilities/containers/SectionContainer';


const FixedHeader: FC = () => {
 
    
    return (
        <header
             className='
            fixed 
            top-0 
            left-0  
            right-0
            z-[9999]
            flex
            items-center
            justify-center
            pt-9
            bg-white
            shadow-md
            pointer-events-auto
          '
        
        >
            <SectionContainer
               className='w-full h-20 flex-row justify-between items-center'
            >
                <Logo />
                <Nav />
            </SectionContainer>
        </header>   
    );
};

export default FixedHeader;