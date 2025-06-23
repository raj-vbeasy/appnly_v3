import SectionContainer from '@/components/utilities/containers/SectionContainer';
import HeadingFourthXL from '@/components/utilities/headings/HeadingFourthXL';
import { landingContents } from '@/contents/landingContents';
import { FC } from 'react'
import Article from './widget/Article';
import Line from './widget/Line';
import ServiceDetail from './widget/ServiceDetail';

const Automation: FC = () => {
    return (
        <SectionContainer className='p-4'>
            <HeadingFourthXL className='
                mb-[28px]
                lg:mb-6
                md:mb-5 md:text-center
                sm:mb-4 sm:text-center
                xs:mb-3 xs:text-center
            '>
                {landingContents.automation.heading}
            </HeadingFourthXL>
            <div className='
                flex flex-col gap-[48px]
                lg:gap-10
                md:gap-8
                sm:gap-6
                xs:gap-4
            '>
                {
                    landingContents.automation.article.map(({content,items,title}) => {
                        return (
                            <div
                                key={title}
                                className='flex flex-col w-full'
                            >   
                                <Article content={content} title={title} />
                                <Line />
                                <ul className='
                                    grid grid-cols-2 gap-[40px]
                                    lg:gap-8
                                    md:gap-6
                                    sm:grid-cols-1 sm:gap-4
                                    xs:gap-3
                                '>
                                    {
                                        items.map((item,i) => {
                                            return (
                                                <li key={`${title}-${i}`}>
                                                    <ServiceDetail 
                                                        {...item}
                                                    />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </SectionContainer>
    );
};

export default Automation;