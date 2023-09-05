import React from 'react';
import { TypographyH2 } from '../typography';
import Image from 'next/image';

const LatestPost = () => {
  return (
    <div className='w-full flex-1 px-5 md:pr-0 '>
      <div className='space-y-2'>
        <TypographyH2 className='text-center'>Latest Post Live</TypographyH2>
        <p className='md:text-2xl text-center'>
          straight from the Faraday feed
        </p>
      </div>

      <div className='flex md:flex-row flex-col overflow-y-auto max-h-[550px] md:overflow-x-auto gap-4 mt-12 scroll-bar'>
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
