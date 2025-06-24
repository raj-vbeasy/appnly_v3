import { headerContents } from '@/contents/headerContents';
import Image from 'next/image';
import Link from 'next/link'; // ✅ Import Link
import { FC } from 'react';

const Logo: FC = () => {
  return (
    <Link href="/" passHref>
      <div className="relative w-[140px] h-[38px] inline-block cursor-pointer">
        <Image 
          src={headerContents.logoSrc}
          alt="Logo"
          fill
          className="object-cover"
        />
      </div>
    </Link>
  );
};

export default Logo;
