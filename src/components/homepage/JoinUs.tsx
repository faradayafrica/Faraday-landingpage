import React from 'react';
import { TypographyH2 } from '../typography';
import Button from '../Button';

function JoinUs() {
  return (
    <div className='flex-1 text-center space-y-8 p-10'>
      <TypographyH2>Join lots of other students using Faraday</TypographyH2>

      <Button variant='primary'>Sign up for free</Button>
    </div>
  );
}

export default JoinUs;
