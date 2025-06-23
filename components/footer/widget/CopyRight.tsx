import ParagraphBaseRelax from '@/components/utilities/paragraphs/ParagraphBaseRelax';
import { footerContents } from '@/contents/footerContents';
import { FC } from 'react'

const CopyRight: FC = () => {
    return (
        <div className="flex flex-col gap-[12px] lg:gap-3 md:gap-3 sm:gap-2 xs:gap-2 max-w-[360px] lg:max-w-[320px] md:max-w-full sm:max-w-full xs:max-w-full md:mt-4 sm:mt-0">
            <ParagraphBaseRelax className='text-background'>
                For more information, checkout out&nbsp;
                <a href={footerContents.copyRight.policyPagePath} className='border-b-solid border-b-[1px] border-b-background'>
                    Privacy Policy
                </a> 
                &nbsp;and&nbsp;
                <a href={footerContents.copyRight.termsPagePath} className='border-b-solid border-b-[1px] border-b-background'>
                    Terms of Service.
                </a>
            </ParagraphBaseRelax>
            <ParagraphBaseRelax className='text-background opacity-50'>
                ©2016-2025 Appnly, all rights reserved 
            </ParagraphBaseRelax>
        </div>
    );
};

export default CopyRight;