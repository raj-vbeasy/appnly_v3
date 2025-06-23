import HeadingSm from '@/components/utilities/headings/HeadingSm';
import ParagraphBaseRelax from '@/components/utilities/paragraphs/ParagraphBaseRelax';
import Image from 'next/image';
import { FC } from 'react'

interface Props{
    title: string,
    content: string,
    imageSrc: string,
}

const ServiceDetail: FC<Props> = ({content,imageSrc,title}) => {
    return (
        <div className='
            grid grid-cols-[30px_1fr] gap-[16px] xl:grid-cols-[16px_1fr]
            md:justify-center md:text-center
            sm:justify-center sm:text-center
            xs:justify-center xs:text-center
        '>
            <span className='
                aspect-square w-full inline-block relative
                md:mx-auto
                sm:mx-auto
                xs:mx-auto
            '>
                <Image 
                    src={imageSrc} 
                    alt={imageSrc} 
                    className='object-contain'
                    fill
                />
            </span>
            <span className='flex flex-col gap-[8px]'>
                <HeadingSm className='text-primary'>
                    {title}
                </HeadingSm>
                <ParagraphBaseRelax className='text-secondary opacity-85'>
                    {content}
                </ParagraphBaseRelax>
            </span>
        </div>
    );
};

export default ServiceDetail;