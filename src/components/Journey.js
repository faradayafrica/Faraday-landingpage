import React from "react";
import JourneyImage from "../images/journey.png";

function Journey() {
  return (
    <section className='bg-journeyBg py-24'>
      <div className='container'>
        <img
          src={JourneyImage}
          alt='Ready to start your Journey?'
          className='mx-auto'
        />
        <h3 className='max-w-[390px] mx-auto md:max-w-max font-extrabold text-[28px] md:text-[48px] mb-5 text-center mt-8 before:content-[url(./images/ready-left.svg)] before:w-2 before:absolute before:-mt-5 before:-ml-16 after:content-[""] after:w-[40px] after:h-[40px] after:[background-size:_40px_40px] md:after:w-[60px] md:after:h-[60px] md:after:[background-size:_60px_60px] after:bg-[url(./images/ready-right.svg)] after:absolute after:-mt-12 after:ml-20 md:after:-mt-5 md:after:ml-[1rem] '>
          Ready to start your Journey?
        </h3>
        <a
          href='https://airtable.com/shrQH21yievW9E11k'
          rel='noopener'
          className='block bg-brandColor text-white font-bold font-roboto mx-auto px-8 py-4 mt-4 w-max'
        >
          Sign up now for free
        </a>
      </div>
    </section>
  );
}

export default Journey;
