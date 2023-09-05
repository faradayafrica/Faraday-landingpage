import React from 'react';
import { TypographyH2 } from '../typography';
import Image from 'next/image';

const AskQuestion = () => {
  return (
    <div className='w-full flex-1 px-5'>
      <div className='text-center space-y-2'>
        <TypographyH2>Ask Question</TypographyH2>
        <p className='md:text-2xl'>Enter your question in the input field</p>
      </div>

      <div className='mt-8'>
        <Image
          src={'/images/home/ask-question.svg'}
          width={1000}
          height={800}
          alt='Ask Question'
          className='mx-auto hidden md:flex w-full justify-center  max-w-[900px]'
        />

        <Image
          src={'/images/home/ask-question-mobile.svg'}
          width={800}
          height={500}
          alt='Ask Question'
          className='mx-auto flex justify-center md:hidden w-full max-w-sm '
        />
      </div>
    </div>
  );
};

export default AskQuestion;
