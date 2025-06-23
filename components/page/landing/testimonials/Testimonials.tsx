"use client"
import { FC, useState, useEffect } from 'react'
import TestimonialCard from '@/components/utilities/cards/TestimonialCard';
import SectionContainer from '@/components/utilities/containers/SectionContainer';
import HeadingFourthXL from '@/components/utilities/headings/HeadingFourthXL';
import ParagraphTwiceXLMediumRelax from '@/components/utilities/paragraphs/ParagraphTwiceXLMediumRelax';
import { landingContents } from '@/contents/landingContents';

const Testimonials: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);
    const totalCards = landingContents.testimonials.reviews.length;

    // Calculate cards per view based on screen size
    useEffect(() => {
        const updateCardsPerView = () => {
            const width = window.innerWidth;
            if (width < 640) { // xs
                setCardsPerView(1);
            } else if (width < 768) { // sm
                setCardsPerView(1);
            } else if (width < 1024) { // md
                setCardsPerView(2);
            } else if (width < 1280) { // lg
                setCardsPerView(2);
            } else { // xl and above
                setCardsPerView(3);
            }
        };

        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, []);

    const maxIndex = Math.max(0, totalCards - cardsPerView);
    const canGoLeft = currentIndex > 0;
    const canGoRight = currentIndex < maxIndex;

    const goLeft = () => {
        if (canGoLeft) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const goRight = () => {
        if (canGoRight) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    return (
        <SectionContainer className='p-4'>
            <HeadingFourthXL className='
                mb-7
                lg:mb-6
                md:mb-5 md:text-center
                sm:mb-4 sm:text-center
                xs:mb-3 xs:text-center
            '>
                {landingContents.testimonials.heading}
            </HeadingFourthXL>
           
            <ParagraphTwiceXLMediumRelax className='
                max-w-[850px] mb-[80px]
                lg:max-w-[700px] lg:mb-16
                md:max-w-[600px] md:mb-12 md:text-center md:mx-auto
                sm:max-w-full sm:mb-8 sm:text-center
                xs:mb-6 xs:text-center
            '>
                {landingContents.testimonials.description}
            </ParagraphTwiceXLMediumRelax>

            {/* Carousel Container */}
            <div className="relative">
                {/* Navigation Buttons */}
                {canGoLeft && (
                    <button
                        onClick={goLeft}
                        className="
                            absolute left-0 top-1/2 -translate-y-1/2 z-10
                            w-12 h-12 bg-white border border-gray-300 rounded-full
                            flex items-center justify-center shadow-lg hover:shadow-xl
                            transition-all duration-200 hover:bg-gray-50
                            lg:w-10 lg:h-10
                            md:w-10 md:h-10
                            sm:w-8 sm:h-8
                            xs:w-8 xs:h-8
                            -ml-6
                            lg:-ml-5
                            md:-ml-5
                            sm:-ml-4
                            xs:-ml-4
                        "
                        aria-label="Previous testimonials"
                    >
                        <svg 
                            className="w-6 h-6 lg:w-5 lg:h-5 md:w-5 md:h-5 sm:w-4 sm:h-4 xs:w-4 xs:h-4 text-gray-600" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {canGoRight && (
                    <button
                        onClick={goRight}
                        className="
                            absolute right-0 top-1/2 -translate-y-1/2 z-10
                            w-12 h-12 bg-white border border-gray-300 rounded-full
                            flex items-center justify-center shadow-lg hover:shadow-xl
                            transition-all duration-200 hover:bg-gray-50
                            lg:w-10 lg:h-10
                            md:w-10 md:h-10
                            sm:w-8 sm:h-8
                            xs:w-8 xs:h-8
                            -mr-6
                            lg:-mr-5
                            md:-mr-5
                            sm:-mr-4
                            xs:-mr-4
                        "
                        aria-label="Next testimonials"
                    >
                        <svg 
                            className="w-6 h-6 lg:w-5 lg:h-5 md:w-5 md:h-5 sm:w-4 sm:h-4 xs:w-4 xs:h-4 text-gray-600" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}

                {/* Carousel Content */}
                <div className="
                    overflow-hidden px-8
                    lg:px-6
                    md:px-6
                    sm:px-5
                    xs:px-5
                ">
                    <div 
                        className="
                            flex transition-transform duration-300 ease-in-out gap-[24px]
                            lg:gap-5
                            md:gap-4
                            sm:gap-4
                            xs:gap-3
                        "
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
                        }}
                    >
                        {landingContents.testimonials.reviews.map((review, i) => (
                            <div
                                key={`${review.name}-${i}`}
                                className="flex-shrink-0"
                                style={{
                                    width: `calc(${100 / cardsPerView}% - ${24 * (cardsPerView - 1) / cardsPerView}px)`
                                }}
                            >
                                <TestimonialCard {...review} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="
                    flex justify-center mt-8 gap-2
                    lg:mt-6
                    md:mt-5
                    sm:mt-4
                    xs:mt-3
                ">
                    {Array.from({ length: maxIndex + 1 }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`
                                w-3 h-3 rounded-full transition-colors duration-200
                                lg:w-2.5 lg:h-2.5
                                md:w-2 md:h-2
                                sm:w-2 sm:h-2
                                xs:w-2 xs:h-2
                                ${currentIndex === index 
                                    ? 'bg-primary' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }
                            `}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default Testimonials;