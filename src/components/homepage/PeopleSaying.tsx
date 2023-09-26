import React from 'react';
import { TypographyH2 } from '../typography';
import Image from 'next/image';

function PeopleSaying() {
  return (
    <section className='px-5 flex-1 md:pr-0'>
      <div className='text-center'>
        <TypographyH2>What people are saying</TypographyH2>
        <p>About Faraday</p>
      </div>

      <div className='flex md:flex-row flex-col overflow-y-auto max-h-[550px] md:overflow-x-auto gap-4 mt-12 scroll-bar'>
        <Image
          src={'/images/home/testimonial-card1.svg'}
          width={550}
          height={380}
          alt='Latest Posts'
          className='mx-auto'
        />
        <Image
          src={'/images/home/testimonial-card2.svg'}
          width={550}
          height={380}
          alt='Latest Posts'
          className='mx-auto'
        />
        <Image
          src={'/images/home/testimonial-card1.svg'}
          width={550}
          height={380}
          alt='Latest Posts'
          className='mx-auto'
        />
      </div>
    </section>
  );
}

export default PeopleSaying;
