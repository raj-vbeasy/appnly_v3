import { FC } from 'react';
import SectionContainer from '@/components/utilities/containers/SectionContainer';
import HeadingFourthXL from '@/components/utilities/headings/HeadingFourthXL';
import HeadingXL from '@/components/utilities/headings/HeadingXL';
import ParagraphBaseRelax from '@/components/utilities/paragraphs/ParagraphBaseRelax';
import { privacyContents } from '@/app/content/privacyContent';

const Privacy: FC = () => {
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
                        {privacyContents.title}
                    </HeadingFourthXL>
                </div>

                <div className="
                    max-w-4xl
                    lg:max-w-3xl
                    md:max-w-2xl md:text-center
                    sm:max-w-full sm:text-center
                    xs:text-center
                ">
                    {privacyContents.sections.map((section, index) => (
                        <div key={`privacy-section-${index}`} className="
                            mb-[40px]
                            lg:mb-8
                            md:mb-6
                            sm:mb-4
                            xs:mb-3
                        ">
                            <HeadingXL className="
                                mb-[20px]
                                lg:mb-4
                                md:mb-3 md:text-center
                                sm:mb-2 sm:text-center
                                xs:mb-2 xs:text-center
                            ">
                                {section.title}
                            </HeadingXL>
                            <ParagraphBaseRelax className="
                                md:text-center
                                sm:text-center
                                xs:text-center
                            ">
                                {section.content}
                            </ParagraphBaseRelax>
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </main>
    );
};

export default Privacy;