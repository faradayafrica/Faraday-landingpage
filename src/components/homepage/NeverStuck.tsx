import React from 'react';
import { TypographyH2 } from '../typography';
import Image from 'next/image';

const NeverStuck = () => {
  return (
    <div className='grid grid-cols-2 gap-5'>
      <Image
        src={'/images/home/never-stuck.png'}
        width={1000}
        height={1000}
        alt='never stuck'
      />
      <div className='flex flex-col justify-center p-10 gap-5'>
        <TypographyH2>Never get stuck on coursework</TypographyH2>
        <p className='md:max-w-lg text-2xl text-univast2'>
          Whether you're blocked on a Mathematics question or got stuck on a
          history question, Get expert-verified answers fast in a matter of
          seconds from Faraday bot powered by Wolfram Alpha.
        </p>
      </div>
    </div>
  );
};

export default NeverStuck;
