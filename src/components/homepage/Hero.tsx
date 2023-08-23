import React from 'react';
import { TypographyH1 } from '../typography';
import Button from '../Button';

const Hero = () => {
  return (
    <header>
      <TypographyH1>Inspiration Starts Here, Success Follows</TypographyH1>
      <p>
        Conquer your academic challenges, achieve greatness and celebrate your
        triumphs, hand in hand with other university students across Nigeria.
      </p>
      <Button>Get started</Button>
    </header>
  );
};

export default Hero;
