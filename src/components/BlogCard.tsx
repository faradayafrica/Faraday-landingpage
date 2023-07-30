import Image from 'next/image';
import React from 'react';
import { TypographyH3 } from './Typography';
import Link from 'next/link';

function BlogCard({ featured }: { featured?: boolean }) {
  return (
    <Link href='/blog/blog-details'>
      <div className='rounded-3xl overflow-hidden shadow-[3px_4px_50px_0px_rgba(0,0,0,0.10)]'>
        <Image
          src={'/images/blog/demo-image.png'}
          alt='demo image'
          width={500}
          height={300}
          objectFit='cover'
        />
        <div className='bg-white p-5 space-y-4'>
          <div className='flex gap-3 text-[#2C974B] font-semibold text-xs'>
            {['tag1', 'tag2'].map((tag, id) => (
              <p key={id} className='uppercase'>
                {tag}
              </p>
            ))}
          </div>

          <TypographyH3
            className={`text-lg md:text-xl ${featured ? 'md:text-2xl' : ''}`}
          >
            What building an ed-tech platform is like. How we do it.
          </TypographyH3>

          {featured && (
            <span className='bg-brandColor w-[4rem] h-[.5rem] block'></span>
          )}

          {featured ? (
            <p className='text-base'>
              Starting out building a platform with little to no experience is a
              daunting task that not everyone has the courage to do...Starting
              out building a platform with little to no experience
            </p>
          ) : (
            <p className='text-sm text-truncate'>
              Starting out building a platform with little to no experience is a
              daunting task that not everyone has the courage to do...
            </p>
          )}

          <div className='flex justify-between text-sm'>
            <p>Devgenix</p>
            <p>23 July 2023</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
