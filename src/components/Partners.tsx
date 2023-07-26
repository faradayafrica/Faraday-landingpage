import React from 'react';
import BinaView from '../images/binaview.svg';
import Shortened from '../images/shortened.svg';
import Microsoft from '../images/microsoft.svg';
import Github from '../images/github-nau.svg';
import I4g from '../images/i4g.svg';
import Image from 'next/image';

function Partners() {
  return (
    <section className='container my-24'>
      <h3 className='font-extrabold text-[28px] md:text-[48px] mb-5 text-center'>
        Some of our partners and friends
      </h3>

      <div className='flex flex-col md:flex-row gap-6 mt-14'>
        <BinaView className='block mx-auto' />
        <Shortened />
        <Microsoft aria-label='Microsoft Learn Community, Unizik' />
        <Github />
        <I4g />
      </div>
    </section>
  );
}

export default Partners;
