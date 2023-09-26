import React from 'react';
import { TypographyH1 } from '../typography';
import Button from '../Button';
import Navigation from '../Navigation';
import Image from 'next/image';

const Hero = () => {
  return (
    <header className='relative overflow-hidden sm:flex home-gradient w-full h-screen p-5 md:p-16'>
      <Navigation isHome />

      <div className='mt-24'>
        <TypographyH1 className='text-[#011945] md:text-[64px]'>
          <>
            <span key={1} className='block'>
              Inspiration Starts
            </span>{' '}
            <span key={2} className='block'>
              Here, Success{' '}
            </span>
            <span key={3} className='block'>
              Follows
            </span>
          </>
        </TypographyH1>
        <p className='max-w-[568px] text-sm md:text-lg text-[#6C757D]'>
          Conquer your academic challenges, achieve greatness and celebrate your
          triumphs, hand in hand with other university students across Nigeria.
        </p>
        <Button as='button' variant='primary' className=''>
          Get started
        </Button>
      </div>
      <div className='right-0'>
        <div className='flex gap-3 items-center transform rotate-45 -translate-y-[42px] -translate-x-[23px] md:translate-x-[120px] md:-translate-y-[200px] '>
          <div className='space-y-3'>
            {Array(9)
              .fill('')
              .map((_, ind) => (
                <Image
                  key={ind}
                  src={`/images/home/hero/hero-img${ind + 1}.png`}
                  width={180}
                  height={180}
                  className='w-full max-w-[180px]'
                  alt=''
                />
              ))}
          </div>
          <div className='space-y-3'>
            {Array(9)
              .fill('')
              .map((_, ind) => (
                <Image
                  key={ind}
                  src={`/images/home/hero/hero-img${
                    ind + 3 > 8 ? 1 : ind + 4
                  }.png`}
                  width={180}
                  height={180}
                  className='w-full max-w-[180px]'
                  alt=''
                />
              ))}
          </div>
          <div className='space-y-3'>
            {Array(9)
              .fill('')
              .map((_, ind) => (
                <Image
                  key={ind}
                  src={`/images/home/hero/hero-img${
                    ind + 6 > 9 ? 1 : ind + 6
                  }.png`}
                  width={180}
                  height={180}
                  className='w-full max-w-[180px]'
                  alt=''
                />
              ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
