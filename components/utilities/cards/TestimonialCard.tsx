import { FC } from 'react'
import ParagraphBaseMediumRelax from '../paragraphs/ParagraphBaseMediumRelax';
import ParagraphBaseRelax from '../paragraphs/ParagraphBaseRelax';
import Image from 'next/image';
import HeadingXL from '../headings/HeadingXL';

interface Props{
    name: string,
    comment: string,
    imageSrc: string,
    companyTitle: string
}

const TestimonialCard: FC<Props> = ({comment,companyTitle,imageSrc,name}) => {
    return (
        <div 
            className='
                p-[20px] flex flex-col gap-[14px] w-full h-full
                lg:p-4 lg:gap-3
                md:p-4 md:gap-3 md:text-center
                sm:p-3 sm:gap-2 sm:text-center
                xs:p-3 xs:gap-2 xs:text-center
                
                border-surface-outline border-solid border-[1px] rounded-[8px]
                lg:rounded-[7px]
                md:rounded-[6px]
                sm:rounded-[6px]
                xs:rounded-[4px]
            '
        >
            <div className='
                flex gap-[12px] items-center w-full
                lg:gap-3
                md:gap-2 md:justify-center
                sm:gap-2 sm:justify-center
                xs:gap-2 xs:justify-center
            '>
                <span className='
                    relative w-[36px] h-[36px]
                    lg:w-8 lg:h-8
                    md:w-7 md:h-7
                    sm:w-6 sm:h-6
                    xs:w-6 xs:h-6
                '>
                    <Image 
                        src={imageSrc}
                        alt={imageSrc}
                        fill
                        className='object-contain'
                    />
                </span>
                <HeadingXL>
                    {name}
                </HeadingXL>
            </div>
            <ParagraphBaseMediumRelax className='
                text-secondary h-[4lh] flex-1
                lg:h-auto lg:min-h-[3lh]
                md:h-auto md:min-h-[3lh]
                sm:h-auto sm:min-h-[3lh]
                xs:h-auto xs:min-h-[3lh]
            '>
                {comment}
            </ParagraphBaseMediumRelax>
            <div className='
                flex justify-between items-center
                md:justify-center md:gap-4
                sm:justify-center sm:gap-3
                xs:justify-center xs:gap-3
            '>
                <ParagraphBaseRelax className='text-surface-outline'>
                    {companyTitle}
                </ParagraphBaseRelax>
                <svg className='
                    w-[24px] h-[24px]
                    lg:w-5 lg:h-5
                    md:w-5 md:h-5
                    sm:w-4 sm:h-4
                    xs:w-4 xs:h-4
                ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 8.25C21 5.76472 18.9013 3.75 16.3125 3.75C14.3769 3.75 12.7153 4.87628 12 6.48342C11.2847 4.87628 9.62312 3.75 7.6875 3.75C5.09867 3.75 3 5.76472 3 8.25C3 15.4706 12 20.25 12 20.25C12 20.25 21 15.4706 21 8.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );
};

export default TestimonialCard;