import SectionContainer from '@/components/utilities/containers/SectionContainer';
import HeadingFourthXL from '@/components/utilities/headings/HeadingFourthXL';
import { landingContents } from '@/contents/landingContents';
import { FC } from 'react'
import Tool from './widget/Tool';

const FreeTools: FC = () => {
    return (
        <SectionContainer className='p-4'>
            <HeadingFourthXL className='
                mb-7
                lg:mb-6
                md:mb-5 md:text-center
                sm:mb-4 sm:text-center
                xs:mb-3 xs:text-center
            '>
                {landingContents.freeTools.heading}
            </HeadingFourthXL>
            <div className='
                w-full grid grid-cols-2
                lg:grid-cols-2
                md:grid-cols-2
                sm:grid-cols-1
                xs:grid-cols-1
            '>
                {landingContents.freeTools.tools.map((tool) => {
                    return (
                        <Tool 
                            key={tool.name}
                            {...tool}
                        />
                    )
                })}
            </div>
        </SectionContainer>
    );
};

export default FreeTools;