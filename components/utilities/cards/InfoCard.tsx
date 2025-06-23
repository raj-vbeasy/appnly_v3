import Image from 'next/image';
import { FC } from 'react'
import HeadingXL from '../headings/HeadingXL';
import ParagraphBaseMediumRelax from '../paragraphs/ParagraphBaseMediumRelax';

interface Props{
    imgSrc: string,
    title: string,
    content: string
}

const InfoCard: FC<Props> = ({content,imgSrc,title}) => {
    return (
        <div 
            className='
                p-6 flex flex-col gap-[5rem]
                lg:p-5 lg:gap-16
                md:p-4 md:gap-8 md:text-center
                sm:p-4 sm:gap-4 sm:text-center
                xs:p-3 xs:gap-3 xs:text-center
                
                rounded-[11.5px]
                lg:rounded-[10px]
                md:rounded-[8px]
                sm:rounded-[8px]
                xs:rounded-[6px]
                
                border-surface border-solid border-[1px]
                h-full
            '
        >
            <div className='
                rounded-[50%] bg-surface-light p-[18px] w-[63px] h-[63px]
                lg:p-4 lg:w-[56px] lg:h-[56px]
                md:p-3 md:w-[48px] md:h-[48px] md:mx-auto
                sm:p-3 sm:w-[48px] sm:h-[48px] sm:mx-auto
                xs:p-2 xs:w-[40px] xs:h-[40px] xs:mx-auto
                flex-shrink-0
            '>
                <span className='inline-block w-full h-full relative'>
                    <Image 
                        src={imgSrc}
                        alt={imgSrc}
                        fill
                        className='object-contain'
                    />
                </span>
            </div>

            <div className='flex flex-col gap-2 flex-grow'>
                <HeadingXL className='text-primary'>
                    {title}
                </HeadingXL>
                <ParagraphBaseMediumRelax className='tracking-normal text-secondary'>
                    {content}
                </ParagraphBaseMediumRelax>
            </div>
        </div>
    );
};

export default InfoCard;