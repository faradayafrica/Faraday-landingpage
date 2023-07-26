import React from 'react';
import BinaView from '../images/binaview.svg';
import Shortened from '../images/shortened.svg';
import Microsoft from '../images/microsoft.svg';
import Github from '../images/github-nau.svg';
import I4g from '../images/i4g.svg';

function Partners() {
  return (
    <section className='container my-24'>
      <h3 className='font-extrabold text-[28px] md:text-[48px] mb-5 text-center'>
        Some of our partners and friends
      </h3>

      <div className='flex flex-col md:flex-row gap-6 mt-14'>
        <BinaView className='h-[57px] block mx-auto md:w-[20%]' />
        <Shortened className='h-[57px] block mx-auto md:w-[20%]' />
        <Microsoft
          className='h-[57px] block mx-auto md:w-[20%]'
          aria-label='Microsoft Learn Community, Unizik'
        />
        <Github className='h-[57px] block mx-auto md:w-[20%]' />
        <I4g className='h-[57px] block mx-auto md:w-[20%]' />
      </div>
    </section>
  );
}

export default Partners;
