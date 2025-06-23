import HeadingSm from '@/components/utilities/headings/HeadingSm';
import InfoBase from '@/components/utilities/paragraphs/InfoBase';
import { footerContents } from '@/contents/footerContents';
import { FC } from 'react'

const Discover: FC = () => {
    return (
        <div className="flex flex-col gap-[16px] lg:gap-4 md:gap-3 sm:gap-3 xs:gap-2">
            <HeadingSm className='text-background'>
                {footerContents.discover.title}
            </HeadingSm>
            {
                footerContents.discover.links.map(({href,name},i) => {
                    return (
                        <InfoBase
                            className='opacity-50 text-background'
                            key={`${name}-${i}`}
                        >
                            <a href={href}>
                                {name}
                            </a>
                        </InfoBase>
                    )
                })
            }
        </div>
    );
};

export default Discover;