import React from 'react';
import { TypographyH2 } from '../typography';
import Image from 'next/image';

function AIBot() {
  return (
    <div className='w-full text-center px-5'>
      <div className='mb-8 max-w-3xl mx-auto space-y-2'>
        <TypographyH2>Introducing Nel!</TypographyH2>
        <p className=' text-sm md:text-2xl text-univast2'>
          Nel is an{' '}
          <span className='text-brandColor font-semibold'>AI bot</span> that
          provides immediate answers to your questions while you patiently await
          responses from your peers.
        </p>
      </div>

      <Image
        src={'/images/home/nel-gif.png'}
        width={640}
        height={300}
        alt='nel'
        className='mx-auto'
      />
    </div>
  );
}

export default AIBot;
