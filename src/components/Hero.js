import React from "react";
import Navigation from "./Navigation";

function Hero() {
  return (
    <header className='bg-heroBg text-textBlack md:h-[80vh]'>
      <Navigation />
      <div className='heroBg container pb-32 md:pb-0 pt-32 bg-heroImg bg-no-repeat bg-cover [background-position:_center_300px] h-[calc(100%_-_3rem)]'>
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
