import HeadingSm from '@/components/utilities/headings/HeadingSm';
import InfoBase from '@/components/utilities/paragraphs/InfoBase';
import { footerContents } from '@/contents/footerContents';
import { FC } from 'react'

const Contact: FC = () => {
    return (
        <div className="flex flex-col gap-[16px] lg:gap-4 md:gap-3 sm:gap-3 xs:gap-2">
            <HeadingSm className='text-background'>
                {footerContents.contactInfo.title}
            </HeadingSm>
            {
                footerContents.contactInfo.contacts.map((contact,i) => {
                    return (
                        <InfoBase
                            key={`${contact}-${i}`}
                            className='opacity-50 text-background'
                        >
                            {contact}
                        </InfoBase>
                    )
                })
            }
        </div>
    );
};

export default Contact;