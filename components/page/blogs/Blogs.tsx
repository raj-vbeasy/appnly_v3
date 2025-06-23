import { FC } from 'react';
import SectionContainer from '@/components/utilities/containers/SectionContainer';
import HeadingFourthXL from '@/components/utilities/headings/HeadingFourthXL';
import { blogsContents } from '@/app/content/blogsContent';
import BlogCard from './widgets/BlogCard';

const Blogs: FC = () => {
    return (
        <main className="flex flex-col w-full items-center pt-[200px] lg:pt-[160px] md:pt-[140px] sm:pt-[120px] xs:pt-[100px] pb-20 lg:pb-16 md:pb-12 sm:pb-8 xs:pb-6">
            <SectionContainer className="flex flex-col p-4">
                <div className="mb-[60px] lg:mb-12 md:mb-10 sm:mb-8 xs:mb-6">
                    <HeadingFourthXL className="
                        text-left mb-[40px]
                        lg:mb-8
                        md:mb-6 md:text-center
                        sm:mb-4 sm:text-center
                        xs:mb-3 xs:text-center
                    ">
                        {blogsContents.title}
                    </HeadingFourthXL>
                </div>

                {/* List layout for all screen sizes */}
                <div className="
                    grid grid-cols-1 gap-[32px]
                    lg:gap-6
                    md:gap-5
                    sm:gap-4
                    xs:gap-3
                ">
                    {blogsContents.posts.map((post) => (
                        <BlogCard key={`blog-post-${post.id}`} post={post} />
                    ))}
                </div>
            </SectionContainer>
        </main>
    );
};

export default Blogs;