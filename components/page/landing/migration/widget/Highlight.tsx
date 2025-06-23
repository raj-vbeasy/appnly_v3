import HeadingTwiceXL from '@/components/utilities/headings/HeadingTwiceXL';
import { landingContents } from '@/contents/landingContents';
import { FC } from 'react'

const Highlight: FC = () => {
    return (
        <div 
            className='
                mt-[4.6875cqw] w-full py-[24px] flex justify-center
                lg:mt-12 lg:py-5
                md:mt-8 md:py-4
                sm:mt-6 sm:py-4
                xs:mt-4 xs:py-3
                
                border-surface border-solid border-[1px] rounded-[8px]
                lg:rounded-[7px]
                md:rounded-[6px]
                sm:rounded-[6px]
                xs:rounded-[4px]
            '
        >
            <HeadingTwiceXL 
                className='
                    max-w-[535px] text-center text-primary
                    lg:max-w-[480px]
                    md:max-w-[400px]
                    sm:max-w-full sm:px-4
                    xs:px-2
                '
            >
                {landingContents.migration.highlight}
            </HeadingTwiceXL>
        </div>
    );
};

export default Highlight;