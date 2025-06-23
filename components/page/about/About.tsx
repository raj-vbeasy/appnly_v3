import { FC } from 'react';
import SectionContainer from '@/components/utilities/containers/SectionContainer';
import HeadingFourthXL from '@/components/utilities/headings/HeadingFourthXL';
import { aboutContents } from '@/app/content/aboutUsContent';
import CompanyInfo from './widget/CompanyInfo';
import FAQSection from './widget/FaqSection';

const About: FC = () => {
    return (
        <main className="flex flex-col w-full items-center pt-[200px] lg:pt-[160px] md:pt-[140px] sm:pt-[120px] xs:pt-[100px] pb-20 lg:pb-16 md:pb-12 sm:pb-8 xs:pb-6">
            <SectionContainer className="flex flex-col p-4">
                <div className="mb-[60px] lg:mb-12 md:mb-10 sm:mb-8 xs:mb-6">
                    <HeadingFourthXL className="
                        text-left mb-[40px]
                        lg:mb-8
                        md:mb-6 md:text-center
                        sm:mb-4 sm:text-center
                        xs:mb-3 xs:text-center
                    ">
                        {aboutContents.title}
                    </HeadingFourthXL>
                </div>

                <CompanyInfo />
                <FAQSection />
            </SectionContainer>
        </main>
    );
};

export default About;