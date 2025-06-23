import SectionContainer from '@/components/utilities/containers/SectionContainer';
import HeadingFourthXL from '@/components/utilities/headings/HeadingFourthXL';
import { FC } from 'react'
import PricingGrid from './widget/PricingGrid';
import { landingContents } from '@/contents/landingContents';

const Pricing: FC = () => {
    return (
        <SectionContainer className='p-4'>
            <HeadingFourthXL className='
                mb-7
                lg:mb-6
                md:mb-5 md:text-center
                sm:mb-4 sm:text-center
                xs:mb-3 xs:text-center
            '>
                {landingContents.pricing.heading}
            </HeadingFourthXL>
            <div className='
                border-[1px] border-solid border-surface-outline border-r-transparent w-full grid grid-cols-3
                lg:grid-cols-3
                md:grid-cols-2
                sm:grid-cols-1 sm:border-r-[1px]
                xs:grid-cols-1
            '>
                {landingContents.pricing.pricingList.map((priceData) => {
                    return (
                        <PricingGrid 
                            key={priceData.title}
                            {...priceData}
                        />
                    )
                })}
            </div>
        </SectionContainer>
    );
};

export default Pricing;