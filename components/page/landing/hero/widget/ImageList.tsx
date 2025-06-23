import { landingContents } from '@/contents/landingContents';
import Image from 'next/image';
import { FC } from 'react'


const ImageList: FC = () => {
    return (
        <div className='grid grid-cols-2 gap-9'>
            {landingContents.hero.images.map((src) => {
                return (
                    <div
                        key={src}
                        className='
                            w-[160px]
                            h-[160px] 
                            p-[30px]
                            border-[1px]
                            border-solid
                            border-surface
                            
                        '
                        style={{
                            boxShadow: "0px 4px 8px 4px rgba(0,0,0,0.05)"
                        }}
                    >
                        <span
                            className='inline-block w-full h-full relative'
                        >
                            <Image 
                                src={src}
                                alt={src}
                                fill
                                className='object-contain'
                            />
                        </span>
                    </div>
                )
            })}
        </div>
    );
};

export default ImageList;