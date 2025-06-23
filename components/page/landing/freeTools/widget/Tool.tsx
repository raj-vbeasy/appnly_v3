import HeadingSm from '@/components/utilities/headings/HeadingSm';
import HeadingTwiceXL from '@/components/utilities/headings/HeadingTwiceXL';
import Image from 'next/image';
import { FC } from 'react'

interface Props{
    hashtag: string,
    name: string,
    imageSrc: string
}

const Tool: FC<Props> = ({hashtag,imageSrc,name}) => {
    return (
        <div className='
            flex gap-[24px] items-center
            md:flex-col md:text-center md:gap-4
            sm:flex-col sm:text-center sm:gap-3
            xs:flex-col xs:text-center xs:gap-2
        '>
            <span className='
                w-[87px] h-[87px] p-[22px] border-[1px] border-surface-outline border-solid rounded-[10px]
                md:mx-auto
                sm:mx-auto
                xs:mx-auto
            '>
                <span className='w-full h-full relative inline-block'>
                    <Image 
                        src={imageSrc}
                        alt={imageSrc}
                        fill
                    />
                </span>
            </span>
            <div className='flex flex-col gap-[8px] h-fit'>
                <HeadingSm className='text-primary'>
                    {hashtag}
                </HeadingSm>
                <HeadingTwiceXL className='text-secondary'>
                    {name}
                </HeadingTwiceXL>
            </div>
        </div>
    );
};

export default Tool;