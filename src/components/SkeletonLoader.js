import React from "react";

function SkeletonLoader() {
  return (
    <>
      <div className='animate-pulse w-full flex flex-col md:flex-row gap-5'>
        <div className=' border-b border-b-[#CFD9DE] md:border-b-0 md:border-r  md:border-b-[#CFD9DE] md:pr-12'>
          <div className='w-full md:w-[320px] h-[320px] bg-[#0000003d] md:mx-0' />
          <div className='w-full h-[20px] bg-[#0000003d] my-4'></div>
        </div>
        <div className='space-y-3 w-full'>
          <div className='w-[100%] h-[20px] bg-[#0000003d]'></div>
          <div className='w-full h-[20px] bg-[#0000003d]'></div>
          <div className='w-full h-[20px] bg-[#0000003d]'></div>
          <div className='w-[60%] h-[20px] text-center md:text-left bg-[#0000003d] block'></div>
        </div>
      </div>
    </>
  );
}

export default SkeletonLoader;
