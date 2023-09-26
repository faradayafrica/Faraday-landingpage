import React from 'react';
import { TypographyH2 } from '../typography';
import Button from '../Button';

function JoinUs() {
  return (
    <div className='flex-1 text-center space-y-8 py-16 px-10'>
      <TypographyH2 className='max-w-[677px] mx-auto'>
        Join lots of other students using Faraday
      </TypographyH2>

      <Button variant='primary' className='mx-auto'>
        Sign up for free
      </Button>
    </div>
  );
}

export default JoinUs;
