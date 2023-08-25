import React from 'react';
import { TypographyH2 } from '../typography';
import Image from 'next/image';

const AskQuestion = () => {
  return (
    <div className='w-full '>
      <div className='text-center'>
        <TypographyH2>Ask Question</TypographyH2>
        <p>Enter your question in the input field</p>
      </div>

      <Image
        src={'/images/home/ask-question.svg'}
        width={1000}
        height={800}
        alt='Ask Question'
        className='mx-auto'
      />
    </div>
  );
};

export default AskQuestion;
