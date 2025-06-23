import HeadingSm from '@/components/utilities/headings/HeadingSm';
import { footerContents } from '@/contents/footerContents';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react'

const SocialMedia: FC = () => {
    return (
        <div className="flex flex-col gap-[12px] lg:gap-3 md:gap-3 sm:gap-2 xs:gap-2">
            <HeadingSm className='text-white'>
                {footerContents.contactInfo.title}
            </HeadingSm>
            <div className="flex gap-[22px] lg:gap-5 md:gap-4 sm:gap-4 xs:gap-3">
                {
                    footerContents.SocialMedia.images.map(({link,src},i) => {
                        return (
                            <Link
                                href={link}
                                key={`${link}-${i}`}
                                className="inline-block w-[16px] h-[16px] lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-3 sm:h-3 xs:w-3 xs:h-3 relative"
                            >
                                <Image  
                                    fill
                                    src={src}
                                    alt={src}
                                    className='object-contain'
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SocialMedia;