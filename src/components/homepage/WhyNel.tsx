import React from 'react';
import { TypographyH2 } from '../typography';
import Image from 'next/image';

function WhyNel() {
  return (
    <div className='flex-1 text-center space-y-12 p-5'>
      <TypographyH2>Why did we add Nel?</TypographyH2>

      <div className='flex justify-center items-center flex-col md:flex-row flex-wrap gap-7'>
        <Image
          src='/images/home/speed.svg'
          width={320}
          height={320}
          alt='Nel is fast'
          className='w-64 lg:w-fit'
        />
        <Image
          src='/images/home/ease.svg'
          width={320}
          height={320}
          alt='Nel is easy to use'
          className='w-64 lg:w-fit'
        />
        <Image
          src='/images/home/inspiration.svg'
          width={320}
          height={320}
          alt='inspiration'
          className='w-64 lg:w-fit'
        />
      </div>
    </div>
  );
}

export default WhyNel;
