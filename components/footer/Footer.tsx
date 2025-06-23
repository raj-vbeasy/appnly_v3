import { FC } from 'react'
import SectionContainer from '../utilities/containers/SectionContainer';
import Logo from './widget/Logo';
import Contact from './widget/Contact';
import SocialMedia from './widget/SocialMedia';
import Discover from './widget/Discover';
import CopyRight from './widget/CopyRight';

const Footer: FC = () => {
    return (
        <footer className="bg-footer-background py-[48px] lg:py-10 md:py-8 sm:py-6 xs:py-4 text-background flex justify-center">
            <SectionContainer className="
                flex-row justify-between
                lg:flex-row
                md:flex-col md:gap-8 md:items-center md:text-center
                sm:flex-col sm:gap-6 sm:items-center sm:text-center
                xs:flex-col xs:gap-4 xs:items-center xs:text-center
            ">
                <div className="
                    flex gap-[60px]
                    lg:gap-12
                    md:grid md:grid-cols-2 md:gap-6 md:justify-items-center
                    sm:flex sm:flex-col sm:gap-4 sm:items-center
                    xs:gap-3 xs:flex xs:flex-col xs:items-center
                ">
                    <Logo />
                    <Contact />
                    <Discover />
                    <SocialMedia />
                </div>
                <CopyRight />
            </SectionContainer>
        </footer>
    );
};

export default Footer;