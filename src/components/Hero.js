import React from "react";
import Navigation from "./Navigation";

function Hero() {
  return (
    <header className='bg-heroBg text-textBlack md:min-h- [80vh]'>
      <Navigation />
      <div className='heroBg pb-32 md:pb-72 pt-32 bg-heroImg bg-no-repeat bg-contain md:bg-auto [background-position:_center_bottom] md:min-h- [80vh]'>
        <div className='container'>
          <h1 className='text-center text-[40px] md:text-[72px] font-extrabold max-w-[780px] mx-auto'>
            Stay Connected with Students from all over the world.
          </h1>
          <a
            href='https://airtable.com/shrQH21yievW9E11k'
            rel='noopener'
            className='block bg-brandColor text-white font-bold font-roboto mx-auto px-8 py-4 mt-8 md:mt-10 w-max'
          >
            Sign up now for free
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
