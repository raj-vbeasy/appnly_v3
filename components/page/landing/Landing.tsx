"use client"
import { FC } from 'react'
import Hero from './hero/Hero';
import Migration from './migration/migration';
import Automation from './automation/Automation';
import Pricing from './pricing/Pricing';
import FreeTools from './freeTools/FreeTools';
import Contact from './Contact/Contact';
import Testimonials from './testimonials/Testimonials';

const Landing: FC = ({}) => {

    return (
        <main
    
            className={"flex flex-col w-full pb-20 items-center gap-[60px]"}

        >   
            <Hero />
            <Migration />
            <Automation />
            <Pricing />
            <FreeTools />
            <Contact />
            <Testimonials />

        </main>
    );
};

export default Landing;