import React from "react";
import JourneyImage from "../images/journey.png";

function Journey() {
  return (
    <section className='bg-journeyBg py-24'>
      <div className='container'>
        <img src={JourneyImage} alt='' className='mx-auto' />
        <h3 className='font-extrabold text-[28px] md:text-[48px] mb-5 text-center'>
          Ready to start your Journey?
        </h3>
        <button className='block bg-brandColor text-white mx-auto px-6 py-4 mt-5'>
          Sign up now for free
        </button>
      </div>
    </section>
  );
}

export default Journey;
