import Image from 'next/image';
import React from 'react';

function BlogCard() {
  return (
    <div className='rounded-lg overflow-hidden shadow-[3px_4px_50px_0px_rgba(0,0,0,0.10)]'>
      <Image
        src={'/images/blog/demo-image.png'}
        alt='demo image'
        width={500}
        height={300}
        objectFit='cover'
      />
      <div className='bg-white p-5'>
        <div className='flex gap-3 text-[#2C974B]'>
          {['tag1', 'tag2'].map((tag, id) => (
            <p key={id} className='uppercase'>
              {tag}
            </p>
          ))}
        </div>
        <h3>What building an ed-tech platform is like. How we do it.</h3>

        <span className='bg-brandColor w-[4rem] h-[.5rem] block'></span>

        <p>
          Starting out building a platform with little to no experience is a
          daunting task that not everyone has the courage to do...Starting out
          building a platform with little to no experience
        </p>

        <div className='flex justify-between'>
          <p>Devgenix</p>
          <p>23 July 2023</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
