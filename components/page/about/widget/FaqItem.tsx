import { FC } from 'react';
import InfoBase from '@/components/utilities/paragraphs/InfoBase';
import { cn } from '@/lib/tailwind/cn';

interface FAQItemProps {
    faq: {
        number: string;
        question: string;
        answer: string;
    };
    index: number;
    isActive: boolean;
    onToggle: () => void;
}

const FAQItem: FC<FAQItemProps> = ({ faq, isActive, onToggle }) => {
    return (
        <div className="border-b border-surface-outline">
            <button
                className="w-full py-[24px] lg:py-5 md:py-4 sm:py-3 xs:py-3 flex justify-between items-center text-left group hover:text-surface-outline-variant transition-colors duration-200"
                onClick={onToggle}
            >
                <div className="flex items-center gap-[16px] lg:gap-4 md:gap-3 sm:gap-3 xs:gap-2 flex-1">
                    <span className="font-semibold text-surface-outline-variant text-base lg:text-sm md:text-sm sm:text-sm xs:text-xs">
                        {faq.number}
                    </span>
                    <InfoBase className="font-medium">
                        {faq.question}
                    </InfoBase>
                </div>
                
                <div className={cn(
                    "text-[18px] lg:text-base md:text-base sm:text-sm xs:text-sm text-surface-outline-variant transition-transform duration-200 ml-[16px] lg:ml-4 md:ml-3 sm:ml-2 xs:ml-2",
                    isActive && "transform rotate-180"
                )}>
                    ⌄
                </div>
            </button>
            
            <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isActive ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
            )}>
                <div className="pb-[24px] lg:pb-5 md:pb-4 sm:pb-3 xs:pb-3 pl-[calc(16px+1rem)] lg:pl-[calc(16px+0.75rem)] md:pl-[calc(12px+0.75rem)] sm:pl-[calc(12px+0.5rem)] xs:pl-[calc(8px+0.5rem)]">
                    <InfoBase className="text-surface-outline-variant text-[14px] lg:text-[13px] md:text-[12px] sm:text-[12px] xs:text-[11px] leading-[1.6]">
                        {faq.answer}
                    </InfoBase>
                </div>
            </div>
        </div>
    );
};

export default FAQItem;