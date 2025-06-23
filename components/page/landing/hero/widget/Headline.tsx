import PrimaryButton from '@/components/utilities/buttons/PrimaryButton';
import HeadingFourthXL from '@/components/utilities/headings/HeadingFourthXL';
import HeadingXL from '@/components/utilities/headings/HeadingXL';
import { landingContents } from '@/contents/landingContents';
import { FC } from 'react'

const Headline: FC = () => {
    return (
        <div className='
            flex flex-col max-w-[600px] gap-7
            lg:max-w-[500px] lg:gap-6
            md:max-w-full md:gap-5 md:text-center
            sm:gap-4 sm:text-center
            xs:gap-3 xs:text-center
        '>
            <HeadingFourthXL className='text-primary'>
                {landingContents.hero.headline}
            </HeadingFourthXL>
            <HeadingXL>
                {landingContents.hero.description}
            </HeadingXL>
            <PrimaryButton>
                Get Started
            </PrimaryButton>
        </div>
    );
};

export default Headline;