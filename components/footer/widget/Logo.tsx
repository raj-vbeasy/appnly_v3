import { footerContents } from '@/contents/footerContents';
import Image from 'next/image';
import { FC } from 'react'

const Logo: FC = () => {
    return (
        <div className="w-[72px] h-[72px] lg:w-16 lg:h-16 md:w-14 md:h-14 sm:w-12 sm:h-12 xs:w-10 xs:h-10 relative">
            <Image 
                src={footerContents.logoSrc}
                alt={footerContents.logoSrc}
                fill
                className='object-contain'
            />
        </div>
    );
};

export default Logo;