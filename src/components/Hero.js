import React from "react";
import Navigation from "./Navigation";

function Hero() {
  return (
    <header className='bg-heroBg bg-heroImg bg-no-repeat bg-cover [background-position:_0_240px] text-textBlack  md:h-[80vh]'>
      <Navigation />
      <div className='container py-20'>
        <h1 className='text-center text-[40px] md:text-[72px] font-extrabold max-w-[780px] mx-auto'>
          Stay Connected with Students from all over the world.
        </h1>
        <button className='block bg-brandColor text-white mx-auto px-6 py-4 mt-5'>
          Sign up now for free
        </button>
      </div>
    </header>
  );
}

export default Hero;
