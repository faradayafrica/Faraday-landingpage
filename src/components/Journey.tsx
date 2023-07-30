import React from 'react';
import JourneyImage from '../images/journey.png';
import ReadyLeft from '../images/ready-left.svg';
import ReadyRight from '../images/ready-right.svg';
import Image from 'next/image';

function Journey() {
  return (
    <section className='bg-journeyBg py-24 relative'>
      <div className='container'>
        <Image
          src={JourneyImage}
          alt='Ready to start your Journey?'
          className='mx-auto'
          width={600}
          height={600}
        />
        <Image src={ReadyLeft} alt='' className='absolute bottom-4' />
        <Image src={ReadyRight} alt='' />
        <h3
          className='max-w-[390px] mx-auto md:max-w-max font-extrabold text-[28px] md:text-[48px] mb-5 text-center mt-8
        before:absolute before:content-[""] before:bg-[url(/images/ready-left.svg)] before:w-[40px] before:h-[40px] before:[background-size:_40px_40px] md:before:w-[60px] md:before:h-[60px] md:before:[background-size:_60px_60px] before:-mt-5 before:-ml-16 md:before:-ml-20
        after:absolute after:content-[""] after:bg-[url(/images/ready-right.svg)] after:w-[40px] after:h-[40px] after:[background-size:_40px_40px] md:after:w-[60px] md:after:h-[60px] md:after:[background-size:_60px_60px] after:-mt-12 after:ml-20 md:after:-mt-5 md:after:ml-[1rem] '
        >
          Ready to start your Journey?
        </h3>
        <a
          href='https://app.faraday.africa/signup'
          rel='noopener'
          className='block bg-brandColor rounded-full hover:bg-brandColor/95 text-white font-bold font-roboto mx-auto px-8 py-4 mt-8 md:mt-10 w-max'
        >
          Sign up now for free
        </a>
      </div>
    </section>
  );
}

export default Journey;
