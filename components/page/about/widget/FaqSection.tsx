"use client"
import { FC, useState } from 'react';
import HeadingXL from '@/components/utilities/headings/HeadingXL';
import { aboutContents } from '../../../../app/content/aboutUsContent';
import FAQItem from './FaqItem';

const FAQSection: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="
            border-t border-solid border-gray-200 pt-[80px]
            lg:pt-16
            md:pt-12
            sm:pt-8
            xs:pt-6
        ">
            <HeadingXL className="
                mb-[60px]
                lg:mb-12
                md:mb-10 md:text-center
                sm:mb-8 sm:text-center
                xs:mb-6 xs:text-center
            ">
                {aboutContents.faq.title}
            </HeadingXL>
            
            <div className="w-full flex flex-col">
                {aboutContents.faq.questions.map((faq, index) => (
                    <FAQItem
                        key={`faq-${index}`}
                        faq={faq}
                        index={index}
                        isActive={activeIndex === index}
                        onToggle={() => toggleFAQ(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default FAQSection;