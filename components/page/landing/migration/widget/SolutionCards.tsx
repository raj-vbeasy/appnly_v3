import InfoCard from '@/components/utilities/cards/InfoCard';
import { landingContents } from '@/contents/landingContents';
import { FC } from 'react'

const SolutionCards: FC = () => {
    return (
        <ul className='
            grid grid-cols-3 w-full gap-[4.6875cqw]
            lg:gap-12
            md:grid-cols-2 md:gap-8
            sm:grid-cols-1 sm:gap-6
            xs:gap-4
        '>
            {landingContents.migration.solutions.map(({title,content,imageSrc}) => {
                return (
                    <li key={title}>
                        <InfoCard 
                            content={content}
                            title={title}
                            imgSrc={imageSrc}
                        />
                    </li>
                )
            })}
        </ul>
    );
};

export default SolutionCards;