import React from 'react';
import { TypographyH2 } from '../typography';
import Image from 'next/image';

const LatestPost = () => {
  return (
    <div className='w-full'>
      <TypographyH2 className='text-center'>LastestPost</TypographyH2>

      <div className='flex'>
        <Image
          src={'/images/home/latest-post.svg'}
          width={500}
          height={300}
          alt='Latest Posts'
          className='mx-auto'
        />
        <Image
          src={'/images/home/latest-post.svg'}
          width={500}
          height={300}
          alt='Latest Posts'
          className='mx-auto'
        />
      </div>
    </div>
  );
};

export default LatestPost;
