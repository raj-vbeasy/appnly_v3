import SectionContainer from '@/components/utilities/containers/SectionContainer';
import { FC } from 'react'
import Headline from './widget/Headline';
import ImageList from './widget/ImageList';

const Hero: FC = () => {
    return (
        <SectionContainer className='
            pt-[200px] flex-row justify-between mb-[100px]
            lg:pt-[160px] lg:mb-[80px]
            md:pt-[140px] md:flex-col md:gap-12 md:mb-[60px]
            sm:pt-[120px] sm:gap-8 sm:mb-[40px] p-4
            xs:pt-[100px] xs:gap-6 xs:mb-[30px] mt-28
        '>
            <div>
                <Headline />
            </div>
            <ImageList />
        </SectionContainer>
    );
};

export default Hero;