import SectionContainer from '@/components/utilities/containers/SectionContainer';
import HeadingFourthXL from '@/components/utilities/headings/HeadingFourthXL';
import { landingContents } from '@/contents/landingContents';
import { FC } from 'react'
import SolutionCards from './widget/SolutionCards';
import Highlight from './widget/Highlight';

const Migration: FC = () => {
    return (
        <SectionContainer className='@container p-4'>
            <HeadingFourthXL className='
                mb-7
                lg:mb-6
                md:mb-5 md:text-center
                sm:mb-4 sm:text-center
                xs:mb-3 xs:text-center
            '>
                {landingContents.migration.heading}
            </HeadingFourthXL>
            <SolutionCards />
            <Highlight />
        </SectionContainer>
    );
};

export default Migration;