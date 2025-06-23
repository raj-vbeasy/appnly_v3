import GetStartedButton from '@/components/utilities/buttons/GetStartedButton';
import HeadingTwiceXL from '@/components/utilities/headings/HeadingTwiceXL';
import ParagraphBaseHighlight from '@/components/utilities/paragraphs/ParagraphBaseHighlight';
import ParagraphBaseRelax from '@/components/utilities/paragraphs/ParagraphBaseRelax';
import { FC } from 'react'

interface Props{
    title: string,
    content: string,
    price: string,
    button: {
        type: "hollow" | "solid",
        text: string
    }
}
const PricingGrid: FC<Props> = ({button,content,price,title}) => {
    return (
        <div className='
            p-[20px] flex flex-col w-full h-[240px] justify-between border-r-[1px] border-r-solid border-r-surface-outline
            md:text-center
            sm:text-center
            xs:text-center
        '>
            <div className='flex flex-col'>
                <HeadingTwiceXL className='mb-[12px]'>
                    {title}
                </HeadingTwiceXL>
                <ParagraphBaseRelax className='text-primary opacity-85'>
                    {content}
                </ParagraphBaseRelax>
                <ParagraphBaseHighlight className='text-primary'>
                    {price}
                </ParagraphBaseHighlight>
            </div>
            <GetStartedButton type={button.type} className='w-full'>
                {button.text}
            </GetStartedButton>
        </div>
    );
};

export default PricingGrid;