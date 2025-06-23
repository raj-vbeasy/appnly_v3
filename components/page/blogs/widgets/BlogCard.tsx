import { FC } from 'react';
// import Image from 'next/image';
import HeadingSm from '@/components/utilities/headings/HeadingSm';
import InfoBase from '@/components/utilities/paragraphs/InfoBase';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    hashtag: string;
    image: string;
    date: string;
}

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
    return (
        <article className="
            bg-white border border-gray-200 rounded-[12px] overflow-hidden hover:shadow-lg transition-shadow duration-300
            lg:rounded-[10px]
            md:rounded-[8px]
            sm:rounded-[8px]
            xs:rounded-[6px]
        ">
            <div className="aspect-video relative bg-gray-100">
                <div className="
                    w-full h-full flex items-center justify-center text-gray-400 text-4xl
                    lg:text-3xl
                    md:text-2xl
                    sm:text-xl
                    xs:text-lg
                ">
                    📷
                </div>
            </div>
            
            <div className="
                p-[24px]
                lg:p-5
                md:p-4 md:text-center
                sm:p-4 sm:text-center
                xs:p-3 xs:text-center
            ">
                <div className="
                    mb-[12px]
                    lg:mb-3
                    md:mb-2 md:flex md:justify-center
                    sm:mb-2 sm:flex sm:justify-center
                    xs:mb-2 xs:flex xs:justify-center
                ">
                    <span className="
                        bg-blue-50 text-blue-600 px-[12px] py-[4px] rounded-[12px] text-[12px] font-medium inline-block
                        lg:px-3 lg:py-1 lg:rounded-[10px] lg:text-[11px]
                        md:px-2 md:py-1 md:rounded-[8px] md:text-[10px]
                        sm:px-2 sm:py-1 sm:rounded-[6px] sm:text-[10px]
                        xs:px-2 xs:py-1 xs:rounded-[4px] xs:text-[9px]
                    ">
                        {post.hashtag}
                    </span>
                </div>
                
                <HeadingSm className="
                    mb-[12px] line-clamp-2
                    lg:mb-3
                    md:mb-2
                    sm:mb-2
                    xs:mb-2
                ">
                    {post.title}
                </HeadingSm>
                
                <InfoBase className="
                    text-gray-600 line-clamp-3 mb-[16px]
                    lg:mb-4
                    md:mb-3
                    sm:mb-3
                    xs:mb-2
                ">
                    {post.excerpt}
                </InfoBase>
                
                <InfoBase className="
                    text-gray-400 text-[12px]
                    lg:text-[11px]
                    md:text-[10px]
                    sm:text-[10px]
                    xs:text-[9px]
                ">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}
                </InfoBase>
            </div>
        </article>
    );
};
export default BlogCard;