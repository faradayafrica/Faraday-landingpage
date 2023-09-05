import React from 'react';
import { TypographyH1 } from '../typography';
import Button from '../Button';
import Navigation from '../Navigation';

const Hero = () => {
  return (
    <header className='relative home-gradient w-full h-screen p-5 md:p-16'>
      <Navigation isHome />

      <div>
        <TypographyH1>
          <span className='block'>Inspiration Starts</span>{' '}
          <span className='block'>Here, Success </span>
          <span className='block'>Follows</span>
        </TypographyH1>
        <p className='max-w-[568px] text-sm md:text-lg'>
          Conquer your academic challenges, achieve greatness and celebrate your
          triumphs, hand in hand with other university students across Nigeria.
        </p>
        <Button as='button' styleType='primary'>
          Get started
        </Button>
      </div>
      <div></div>
    </header>
  );
};

export default Hero;
