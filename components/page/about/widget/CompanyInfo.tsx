import { FC } from 'react';
import ParagraphBaseRelax from '@/components/utilities/paragraphs/ParagraphBaseRelax';
import { aboutContents } from '../../../../app/content/aboutUsContent';
import Logo from '@/components/footer/widget/Logo';

const CompanyInfo: FC = () => {
    return (
        <div className="
            flex gap-[80px] items-start mb-[80px]
            lg:gap-16 lg:mb-16
            md:gap-12 md:mb-12 md:flex-col md:text-center
            sm:flex-col sm:gap-8 sm:mb-8 sm:text-center
            xs:gap-6 xs:mb-6 xs:text-center
        ">
            <div className="
                flex flex-col gap-[24px] flex-1
                lg:gap-5
                md:gap-4
                sm:gap-4
                xs:gap-3
            ">
                <ParagraphBaseRelax>
                    {aboutContents.company.description}
                </ParagraphBaseRelax>
                <ParagraphBaseRelax>
                    {aboutContents.company.services}
                </ParagraphBaseRelax>
            </div>
            
            {/* Logo - Hidden on mobile */}
            <div className="
                w-[200px] h-[200px] bg-footer-background rounded-[12px] flex items-center justify-center flex-shrink-0
                lg:w-44 lg:h-44 lg:rounded-[10px] lg:hidden
                md:w-40 md:h-40 md:rounded-[8px] md:hidden
                sm:w-32 sm:h-32 sm:rounded-[8px] sm:hidden
                xs:w-28 xs:h-28 xs:rounded-[6px] xs:hidden
            ">
                <span className="
                    text-[48px] font-bold text-background
                    lg:text-[40px]
                    md:text-[36px]
                    sm:text-[32px]
                    xs:text-[28px]
                ">
                    <Logo />
                </span>
            </div>
        </div>
    );
};

export default CompanyInfo;