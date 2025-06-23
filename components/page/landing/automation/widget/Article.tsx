import HeadingTwiceXL from '@/components/utilities/headings/HeadingTwiceXL';
import ParagraphBaseMediumRelax from '@/components/utilities/paragraphs/ParagraphBaseMediumRelax';
import { FC } from 'react'

interface Props{
    title: string,
    content: string
}

const Article: FC<Props> = ({content,title}) => {
    return (
        <article className='
            max-w-[550px] flex flex-col gap-[12px]
            md:text-center md:mx-auto
            sm:text-center sm:mx-auto
            xs:text-center xs:mx-auto
        '>
            <HeadingTwiceXL>
                {title}
            </HeadingTwiceXL>
            <ParagraphBaseMediumRelax className='opacity-90'>
                {content}
            </ParagraphBaseMediumRelax>
        </article>
    );
};

export default Article;